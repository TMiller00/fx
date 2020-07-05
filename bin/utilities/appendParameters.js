"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonAttributes;
(function (CommonAttributes) {
    CommonAttributes["base"] = "base";
    CommonAttributes["symbols"] = "symbols";
    CommonAttributes["amount"] = "amount";
    CommonAttributes["places"] = "places";
    CommonAttributes["source"] = "source";
})(CommonAttributes || (CommonAttributes = {}));
var appendParameters = function (program, url) {
    var params = ['base', 'symbols', 'amount', 'places', 'source'];
    for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
        var p = params_1[_i];
        if (program[p]) {
            url.searchParams.append(p, program[p]);
        }
    }
    return url;
};
exports.default = appendParameters;
