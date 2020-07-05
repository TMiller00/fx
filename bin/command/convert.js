"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var commonCommands_1 = __importDefault(require("../utilities/commonCommands"));
var convertParameters = ['from', 'to', 'date'];
var LATEST_URL = "https://api.exchangerate.host/convert";
exports.convert = commonCommands_1.default(LATEST_URL, convertParameters);
