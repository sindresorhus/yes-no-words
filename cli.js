#!/usr/bin/env node
'use strict';
var meow = require('meow');
var yesNoWords = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ yes-no',
		'  Yisss',
		'',
		'  $ yes-no --all --type yes',
		'  Absolutely',
		'  Affirmative',
		'  ...',
		'',
		'Options',
		'  --all   Get all words instead of a random word',
		'  --type  Type of word: yes|no|all  Default: all'
	]
});

var type = cli.flags.type || 'all';
console.log(cli.flags.all ? yesNoWords[type].join('\n') : yesNoWords[type + 'Random']());
