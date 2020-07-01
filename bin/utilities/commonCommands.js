"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getData_1 = __importDefault(require("../command/getData"));
var CommonAttributes;
(function (CommonAttributes) {
    CommonAttributes["base"] = "base";
    CommonAttributes["symbols"] = "symbols";
    CommonAttributes["amount"] = "amount";
    CommonAttributes["places"] = "places";
    CommonAttributes["source"] = "source";
})(CommonAttributes || (CommonAttributes = {}));
var commonCommands = function (endpoint, f) {
    var BASE_URL = new URL(endpoint);
    var params = ['base', 'symbols', 'amount', 'places', 'source'];
    return function (program) {
        BASE_URL = f(program, BASE_URL);
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var p = params_1[_i];
            if (program[p]) {
                BASE_URL.searchParams.append(p, program[p]);
            }
        }
        return getData_1.default(BASE_URL.href);
    };
};
exports.default = commonCommands;
