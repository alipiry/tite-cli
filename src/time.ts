#!/usr/bin/env node

import jalali from 'jalaali-js';
import * as consts from './consts';
import chalk from 'chalk';

type Jalali = {
	jy: number,
	jm: number,
	jd: number
};

const todayGregorian: Date = new Date();
const todayJalali: Jalali = jalali.toJalaali(todayGregorian);

const jalaliWeekDay: string = consts.jalaliWeekDays[todayGregorian.getDay()];
const jalaliDay: number = todayJalali.jd;
const jalaliMonth: string = consts.jalaliMonths[todayJalali.jm - 1];
const jalaliYear: number = todayJalali.jy;

const gregorianWeekDay: string = consts.gregorianWeekDays[todayGregorian.getDay()];
const gregorianDay: number = todayGregorian.getDate();
const gregorianMonth: string = consts.gregorianMonths[todayGregorian.getMonth()];
const gregorianYear: number = todayGregorian.getFullYear();

const nowTime: string = `
	${todayGregorian.getHours()} : ${todayGregorian.getMinutes()} : ${todayGregorian.getSeconds()}`;

export function time(): void {

	const jalaliDate: string = `
	${jalaliWeekDay}, ${jalaliDay} ${jalaliMonth} ${jalaliYear}`;
	const gregorianDate: string = `
	${gregorianWeekDay}, ${gregorianDay} ${gregorianMonth} ${gregorianYear}
	`;

	console.log(chalk.bold.cyan(jalaliDate));
	console.log(chalk.bold.red(nowTime));
	console.log(chalk.bold.magenta(gregorianDate));
}
