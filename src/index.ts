import * as property from 'property-seek';

export interface Options {
    start: string,
    end: string
};

const defaults: Options = {

    start: '\{',
    end: '\}'

};

/**
 * polate 
 */
export const polate = (str: string, data: object, options: Options = defaults) =>
    str.replace(new RegExp(`${options.start}([\\w\.\-]+)${options.end}`, 'g'), (_, k) =>
        property(k, data));

export default polate;
