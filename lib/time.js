#!/usr/bin/env node
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
var jalaali_js_1 = __importDefault(require("jalaali-js"));
var consts = __importStar(require("./consts"));
var chalk_1 = __importDefault(require("chalk"));
var todayGregorian = new Date();
var todayJalali = jalaali_js_1.default.toJalaali(todayGregorian);
var jalaliWeekDay = consts.jalaliWeekDays[todayGregorian.getDay()];
var jalaliDay = todayJalali.jd;
var jalaliMonth = consts.jalaliMonths[todayJalali.jm - 1];
var jalaliYear = todayJalali.jy;
var gregorianWeekDay = consts.gregorianWeekDays[todayGregorian.getDay()];
var gregorianDay = todayGregorian.getDate();
var gregorianMonth = consts.gregorianMonths[todayGregorian.getMonth()];
var gregorianYear = todayGregorian.getFullYear();
var nowTime = "\n\t" + todayGregorian.getHours() + " : " + todayGregorian.getMinutes() + " : " + todayGregorian.getSeconds();
function time() {
    var jalaliDate = "\n\t" + jalaliWeekDay + ", " + jalaliDay + " " + jalaliMonth + " " + jalaliYear;
    var gregorianDate = "\n\t" + gregorianWeekDay + ", " + gregorianDay + " " + gregorianMonth + " " + gregorianYear + "\n\t";
    console.log(chalk_1.default.bold.cyan(jalaliDate));
    console.log(chalk_1.default.bold.red(nowTime));
    console.log(chalk_1.default.bold.magenta(gregorianDate));
}
exports.time = time;
