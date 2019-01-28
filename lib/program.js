#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
function options() {
    commander_1.default
        .version('1.1.0')
        .description('Time & Date getter')
        .option('-y, --year', 'Show year')
        .option('-m, --month', 'Show month')
        .option('-d, --day', 'Show day')
        .parse(process.argv);
}
exports.default = options;
