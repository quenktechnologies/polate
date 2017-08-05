import property from 'property-seek';

export interface Options {
    start?: string,
    end?: string,
    regex?: string,
    leaveMissing?: boolean;
};

const defaults: Options = {

    start: '\{',
    end: '\}',
    regex: '([\\w\.\-]+)',
    leaveMissing: true

};

const maybe = (v: any, k: string, opts: Options) =>
    (v != null) ? v
        : opts.leaveMissing ?
            `${opts.start}${k}${opts.end}`
            : v

/**
 * polate 
 */
export const polate = (str: string, data: object, opts: Options = {}) => {
    let options = Object.assign({}, opts, defaults);
    return str.replace(new RegExp(`${options.start}${options.regex}${options.end}`, 'g'), (_, k) =>
        maybe(property(k, data), k, options));
}

export default polate;
