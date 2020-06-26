"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processCommands = void 0;
var url = require('url');
var getData_1 = __importDefault(require("./getData"));
var LATEST_URL = "https://api.exchangerate.host/latest";
exports.processCommands = function (program) {
    var BASE_URL = new URL(LATEST_URL);
    if (program.base) {
        BASE_URL.searchParams.append('base', program.base);
    }
    if (program.symbols) {
        BASE_URL.searchParams.append('symbols', program.symbols);
    }
    if (program.amount) {
        BASE_URL.searchParams.append('amount', program.amount);
    }
    if (program.places) {
        BASE_URL.searchParams.append('places', program.places);
    }
    if (program.source) {
        BASE_URL.searchParams.append('source', program.source);
    }
    return getData_1.default(BASE_URL.href);
};
