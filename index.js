"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property_seek_1 = require("property-seek");
;
var defaults = {
    start: '\{',
    end: '\}',
    regex: '([\\w\.\-]+)',
    leaveMissing: true
};
var maybe = function (v, k, opts) {
    return (v != null) ? v
        : opts.leaveMissing ?
            "" + opts.start + k + opts.end
            : v;
};
/**
 * polate
 */
exports.polate = function (str, data, opts) {
    if (opts === void 0) { opts = {}; }
    var options = Object.assign({}, defaults, opts);
    return str.replace(new RegExp("" + options.start + options.regex + options.end, 'g'), function (_, k) {
        return maybe(property_seek_1.default(k, data), k, options);
    });
};
exports.default = exports.polate;
//# sourceMappingURL=index.js.map