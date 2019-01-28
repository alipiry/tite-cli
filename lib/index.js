#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program_1 = require("./program");
var tite_1 = require("./tite");
if (!process.argv.slice(2).length)
    tite_1.getTite();
program_1.options();
