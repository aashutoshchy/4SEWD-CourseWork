import generateLoveScore, { generateLoveMessage } from "./utils.js";
import chalk from "chalk";

// let lover1 = "Aashutosh";
// let lover2 = "Na Hee-do";
// lover2 = "Kim Tae-ri";
// lover2 = "ROSÉ";

// Challenge
// let readLine = require("readline-sync");
import readLine from "readline-sync";

let person1 = readLine.question("Enter the name of person1: ");

let person2 = readLine.question("Enter the name of person2: ");

let loveScore = generateLoveScore();
let msg = generateLoveMessage(loveScore);

// console.log(chalk.red(`${lover1} ❤️ ${lover2}`));
console.log(chalk.red(`${person1} ❤️ ${person2}`));

console.log(chalk.blue.bgYellowBright(`Love Score: ${loveScore}%`));
console.log(chalk.bgCyanBright(msg));
