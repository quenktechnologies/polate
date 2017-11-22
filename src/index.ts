import property from 'property-seek';

export interface Options {
    start?: string,
    end?: string,
    regex?: string,
    leaveMissing?: boolean,
    applyFunctions?: boolean
};

const defaults: Options = {

    start: '\{',
    end: '\}',
    regex: '([\\w\$\.\-]+)',
    leaveMissing: true,
    applyFunctions: false

};

const maybe = (v: any, k: string, opts: Options) =>
    (typeof v === 'function') ?
        opts.applyFunctions ?
            v(k) : v : (v != null) ?
            v : opts.leaveMissing ?
                `${opts.start}${k}${opts.end}` :
                v;

/**
 * polate 
 */
export const polate = (str: string, data: object, opts: Options = {}) => {
    let options = Object.assign({}, defaults, opts);
    return str.replace(new RegExp(`${options.start}${options.regex}${options.end}`, 'g'), (_, k) =>
        maybe(property(k, data), k, options));
}

export default polate;
