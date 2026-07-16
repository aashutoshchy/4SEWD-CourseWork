import generateLoveScore, { generateLoveMessage } from "./utils.js";
import chalk from "chalk";

let lover1 = "Aashutosh";
let lover2 = "Na Hee-do";
lover2 = "Kim Tae-ri";
lover2 = "ROSÉ";
// Challenge

let loveScore = generateLoveScore();
let msg = generateLoveMessage(loveScore);

console.log(`${lover1} ❤️ ${lover2}`);
console.log(`Love Score: ${loveScore}%`);
console.log(msg);
