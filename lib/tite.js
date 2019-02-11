"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var tite = __importStar(require("@alipiry/tite-api"));
function getTite() {
    console.log(chalk_1.default.bold.red('Time:', tite.nowTime));
    console.log(chalk_1.default.bold.cyan('Jalali Date:', tite.jalaliDate));
    console.log(chalk_1.default.bold.magenta('Gregorian Date:', tite.gregorianDate));
}
exports.getTite = getTite;
