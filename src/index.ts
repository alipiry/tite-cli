#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';

const log = console.log;

log(
	chalk.magenta.bold(
		figlet.textSync(
			'Tite: Time + Date',
			{ horizontalLayout : 'full' }
		)
	)
)
