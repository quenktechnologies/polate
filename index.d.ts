export interface Options {
    start?: string;
    end?: string;
    regex?: string;
    leaveMissing?: boolean;
    applyFunctions?: boolean;
}
/**
 * polate
 */
export declare const polate: (str: string, data: object, opts?: Options) => string;
export default polate;
