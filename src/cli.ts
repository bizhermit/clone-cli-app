#! /usr/bin/env node

const pkg = require("../package.json") as {[key: string]: any};
process.stdout.write(`\n${pkg.name} v${pkg.version}\n`);

process.stdout.write(`${process.argv}\n`);