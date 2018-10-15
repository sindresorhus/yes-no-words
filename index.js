'use strict';
const uniqueRandomArray = require('unique-random-array');
const yes = require('./yes.json');
const no = require('./no.json');

const all = yes.concat(no).sort();

exports.yes = yes;
exports.no = no;
exports.all = all;
exports.yesRandom = uniqueRandomArray(yes);
exports.noRandom = uniqueRandomArray(no);
exports.allRandom = uniqueRandomArray(all);
