"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.historical = void 0;
var commonCommands_1 = __importDefault(require("../utilities/commonCommands"));
var LATEST_URL = "https://api.exchangerate.host/";
exports.historical = commonCommands_1.default(LATEST_URL);
