export interface Options {
    start: string;
    end: string;
}
/**
 * polate
 */
export declare const polate: (str: string, data: object, options?: Options) => string;
export default polate;
