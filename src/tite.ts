import chalk from 'chalk';
import * as tite from '@alipiry/tite-api';

export function getTite(): void {
  console.log(chalk.bold.red('Time:', tite.nowTime));
  console.log(chalk.bold.cyan('Jalali Date:',tite.jalaliDate));
  console.log(chalk.bold.magenta('Gregorian Date:', tite.gregorianDate));
}
