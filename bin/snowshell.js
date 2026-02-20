#!/usr/bin/env node

const { getBanner, getPS1 } = require("../index");

const args = process.argv.slice(2);
const command = args[0] || "banner";

switch (command) {
  case "banner":
    console.log(getBanner());
    break;
  case "ps1":
    process.stdout.write(getPS1());
    break;
  case "install":
    console.log("Add this to your .bashrc or .zshrc:\n");
    console.log(`  eval "$(npx snowshell ps1)"`);
    console.log("\nRestart your terminal to apply the theme.");
    break;
  default:
    console.log("Usage: snowshell [banner|ps1|install]");
}
