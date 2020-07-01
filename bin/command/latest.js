"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.latest = void 0;
var commonCommands_1 = __importDefault(require("../utilities/commonCommands"));
var LATEST_URL = "https://api.exchangerate.host/latest";
var latestFunctions = function (program, queryUrl) { return queryUrl; };
exports.latest = commonCommands_1.default(LATEST_URL, latestFunctions);
