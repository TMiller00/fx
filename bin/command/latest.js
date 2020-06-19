"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processCommands = exports.LATEST_URL = void 0;
exports.LATEST_URL = "https://api.exchangerate.host/latest";
exports.processCommands = function (BASE_URL, program) {
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
    return BASE_URL;
};
