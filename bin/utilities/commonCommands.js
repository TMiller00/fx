"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getData_1 = __importDefault(require("../command/getData"));
var commonAttributes = ['base', 'symbols', 'amount', 'places', 'source'];
var commonCommands = function (endpoint, parameters) {
    var Parameters = __spreadArrays(parameters, commonAttributes);
    return function (program) {
        var BASE_URL = new URL(endpoint);
        if (BASE_URL.pathname === '/') {
            BASE_URL.pathname = program['date'];
        }
        for (var _i = 0, Parameters_1 = Parameters; _i < Parameters_1.length; _i++) {
            var p = Parameters_1[_i];
            if (program[p]) {
                BASE_URL.searchParams.append(p, program[p]);
            }
        }
        return getData_1.default(BASE_URL.href);
    };
};
exports.default = commonCommands;
