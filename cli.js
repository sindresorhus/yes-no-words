#!/usr/bin/env node
'use strict';
const meow = require('meow');
const yesNoWords = require('.');

const cli = meow(`
	Examples
	  $ yes-no
	  Yisss

	  $ yes-no --all --type yes
	  Absolutely
	  Affirmative
	  …

	Options
	  --all   Get all words instead of a random word
	  --type  Type of word: yes|no|all  [Default: all]
`);

const type = cli.flags.type || 'all';
console.log(cli.flags.all ? yesNoWords[type].join('\n') : yesNoWords[`${type}Random`]());
