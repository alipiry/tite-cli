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
var nowTime = todayGregorian.getHours() + ":" + todayGregorian.getMinutes() + ":" + todayGregorian.getSeconds();
var jalaliDate = jalaliWeekDay + ", " + jalaliDay + " " + jalaliMonth + " " + jalaliYear;
var gregorianDate = gregorianWeekDay + ", " + gregorianDay + " " + gregorianMonth + " " + gregorianYear;
function getTite() {
    console.log(chalk_1.default.bold.red('Time:', nowTime));
    console.log(chalk_1.default.bold.cyan('Jalali Date:', jalaliDate));
    console.log(chalk_1.default.bold.magenta('Gregorian Data:', gregorianDate));
}
exports.getTite = getTite;
function getYear() {
    return "Jalali Year: " + jalaliYear + "\nGregorian Year: " + gregorianYear;
}
exports.getYear = getYear;
function getMonth() {
    return "Jalali Month: " + jalaliMonth + "\nGregorian Month: " + gregorianMonth;
}
exports.getMonth = getMonth;
function getDay() {
    return "Jalali Day: " + jalaliDay + "\nGregorian Day: " + gregorianDay;
}
exports.getDay = getDay;
function getWeekDay() {
    return "Jalali Week Day: " + jalaliWeekDay + "\nGregorian Week Day: " + gregorianWeekDay;
}
exports.getWeekDay = getWeekDay;
function getTime() {
    return "Time: " + nowTime;
}
exports.getTime = getTime;
