const chalk = require("chalk");

const snowflakes = ["*", "+", ".", "~"];
const iceBlue = chalk.hex("#88CFFC");
const frostWhite = chalk.hex("#E8F4FD");
const silver = chalk.hex("#C0C0C0");

function randomSnowflake() {
  return snowflakes[Math.floor(Math.random() * snowflakes.length)];
}

function generateBorder(width) {
  let border = "";
  for (let i = 0; i < width; i++) {
    border += frostWhite(randomSnowflake()) + " ";
  }
  return border;
}

function getPrompt(cwd) {
  const snow = frostWhite(randomSnowflake());
  const dir = iceBlue(cwd || process.cwd());
  const arrow = silver(">");
  return `${snow} ${dir} ${arrow} `;
}

function getBanner() {
  const top = generateBorder(20);
  const title = iceBlue.bold("  snowshell v1.2.0");
  const subtitle = silver("  a winter-themed terminal prompt");
  const bottom = generateBorder(20);
  return `\n${top}\n${title}\n${subtitle}\n${bottom}\n`;
}

function getPS1() {
  return `${randomSnowflake()} \\[\\033[38;5;117m\\]\\w\\[\\033[0m\\] > `;
}

module.exports = { getPrompt, getBanner, getPS1, generateBorder };
