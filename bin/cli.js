#! /usr/bin/env node
"use strict";
const pkg = require("../package.json");
process.stdout.write(`\n${pkg.name} v${pkg.version}\n`);
process.stdout.write(`${process.argv}\n`);
