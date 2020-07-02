"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeseries = void 0;
var commonCommands_1 = __importDefault(require("../utilities/commonCommands"));
var LATEST_URL = 'https://api.exchangerate.host/timeseries';
var timeseriesFunctions = function (program, queryUrl) {
    queryUrl.searchParams.append('start_date', program.start);
    queryUrl.searchParams.append('end_date', program.end);
    return queryUrl;
};
exports.timeseries = commonCommands_1.default(LATEST_URL, timeseriesFunctions);
