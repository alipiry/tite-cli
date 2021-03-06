import program from 'commander';
import {
  getYear,
  getMonth,
  getDay,
  getWeekDay,
  getTime
} from '@alipiry/tite-api';
import chalk from 'chalk';
const pkg = require('../package.json');

export function options(): void {
  program
    .version(pkg.version)
    .description('Time & Date getter')
    .option('-y, --year', 'Show year')
    .option('-m, --month', 'Show month')
    .option('-d, --day', 'Show day')
    .option('-w, --weekday', 'Show week day')
    .option('-t, --time', 'Show time')
    .parse(process.argv);

  if (program.year) console.log(chalk.bold.yellow(getYear()));
  if (program.month) console.log(chalk.bold.yellow(getMonth()));
  if (program.day) console.log(chalk.bold.yellow(getDay()));
  if (program.weekday) console.log(chalk.bold.yellow(getWeekDay()));
  if (program.time) console.log(chalk.bold.yellow(getTime()));
}
