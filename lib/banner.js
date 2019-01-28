#!/user/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var figlet_1 = __importDefault(require("figlet"));
function banner() {
    var log = console.log;
    log(chalk_1.default.magenta.bold(figlet_1.default.textSync('Tite: Time + Date', { horizontalLayout: 'full' })));
}
exports.default = banner;
