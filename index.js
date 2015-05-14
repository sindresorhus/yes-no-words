'use strict';
var uniqueRandomArray = require('unique-random-array');
var yes = require('./yes.json');
var no = require('./no.json');
var all = yes.concat(no).sort();

exports.yes = yes;
exports.no = no;
exports.all = all;
exports.yesRandom = uniqueRandomArray(yes);
exports.noRandom = uniqueRandomArray(no);
exports.allRandom = uniqueRandomArray(all);
