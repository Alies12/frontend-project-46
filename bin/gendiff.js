import { Command } from "commander";
import showDiff from "../src/index.js";
const program = new Command();

program
    .name('gendiff-js')
    .description('CLI to some JavaScript string utilities')
program
    .option('-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .argument('filepath1')
    .argument('filepath2')
    .action(showDiff)
    .helpOption('-h, --help', 'output usage information')


program.parse();