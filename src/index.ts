#!/usr/bin/env node

import { options } from './program';
import { getTite } from './tite';

if (!process.argv.slice(2).length) getTite();

options();
