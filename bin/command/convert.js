"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var commonCommands_1 = __importDefault(require("../utilities/commonCommands"));
var LATEST_URL = "https://api.exchangerate.host/convert";
var ConvertAttributes;
(function (ConvertAttributes) {
    ConvertAttributes["from"] = "from";
    ConvertAttributes["to"] = "to";
    ConvertAttributes["date"] = "date";
})(ConvertAttributes || (ConvertAttributes = {}));
var convertFunctions = function (program, queryUrl) {
    var params = ['from', 'to', 'date'];
    for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
        var p = params_1[_i];
        if (program[p]) {
            queryUrl.searchParams.append(p, program[p]);
        }
    }
    return queryUrl;
};
exports.convert = commonCommands_1.default(LATEST_URL, convertFunctions);
