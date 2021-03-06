"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var tite_api_1 = require("@alipiry/tite-api");
var chalk_1 = __importDefault(require("chalk"));
var pkg = require('../package.json');
function options() {
    commander_1.default
        .version(pkg.version)
        .description('Time & Date getter')
        .option('-y, --year', 'Show year')
        .option('-m, --month', 'Show month')
        .option('-d, --day', 'Show day')
        .option('-w, --weekday', 'Show week day')
        .option('-t, --time', 'Show time')
        .parse(process.argv);
    if (commander_1.default.year)
        console.log(chalk_1.default.bold.yellow(tite_api_1.getYear()));
    if (commander_1.default.month)
        console.log(chalk_1.default.bold.yellow(tite_api_1.getMonth()));
    if (commander_1.default.day)
        console.log(chalk_1.default.bold.yellow(tite_api_1.getDay()));
    if (commander_1.default.weekday)
        console.log(chalk_1.default.bold.yellow(tite_api_1.getWeekDay()));
    if (commander_1.default.time)
        console.log(chalk_1.default.bold.yellow(tite_api_1.getTime()));
}
exports.options = options;
