export interface Options {
    start: string;
    end: string;
    regex: string;
    leaveMissing: boolean;
}
/**
 * polate
 */
export declare const polate: (str: string, data: object, options?: Options) => string;
export default polate;
