import { Command } from 'commander';
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-V, --version', 'output the version number')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format <type>', 'output format')
    .description('CLI to some JavaScript string utilites')

    program.parse();