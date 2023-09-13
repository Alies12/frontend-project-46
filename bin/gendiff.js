import { Command } from 'commander';
const program = new Command();

program
    .name('gendiff-js')
    .description('CLI to some JavaScript string utilites')
    .version('0.0.1');
program.parse();