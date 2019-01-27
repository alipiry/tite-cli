import program from 'commander';

export default function options() {
	program
		.version('1.1.0')
		.description('Time & Date getter')
		.option('-y, --year', 'Show year')
		.option('-m, --month', 'Show month')
		.option('-d, --day', 'Show day')
		.parse(process.argv);
}
