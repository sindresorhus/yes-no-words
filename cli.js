#!/usr/bin/env node
import meow from 'meow';
import yesNoWords from './index.js';

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
`, {
	importMeta: import.meta,
});

const type = cli.flags.type ?? 'all';
console.log(cli.flags.all ? yesNoWords[type].join('\n') : yesNoWords[`${type}Random`]());
