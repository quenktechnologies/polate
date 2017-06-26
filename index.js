"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property = require("property-seek");
;
var defaults = {
    start: '\{',
    end: '\}'
};
/**
 * polate
 */
exports.polate = function (str, data, options) {
    if (options === void 0) { options = defaults; }
    return str.replace(new RegExp(options.start + "([\\w.-]+)" + options.end, 'g'), function (_, k) {
        return property(k, data);
    });
};
exports.default = exports.polate;
//# sourceMappingURL=index.js.map