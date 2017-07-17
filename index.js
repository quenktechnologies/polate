"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property = require("property-seek");
;
var defaults = {
    start: '\{',
    end: '\}',
    regex: '([\\w\.\-]+)',
    leaveMissing: true
};
var maybe = function (v, k, opts) {
    return console.error('maybe ', k, v) ||
        (v != null) ? v
        : opts.leaveMissing ?
            "" + opts.start + k + opts.end
            : v;
};
/**
 * polate
 */
exports.polate = function (str, data, options) {
    if (options === void 0) { options = defaults; }
    return str.replace(new RegExp("" + options.start + options.regex + options.end, 'g'), function (_, k) {
        return maybe(property(k, data), k, options);
    });
};
exports.default = exports.polate;
//# sourceMappingURL=index.js.map