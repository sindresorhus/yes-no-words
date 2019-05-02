import yes = require('./yes.json');
import no = require('./no.json');

declare const yesNoWords: {
	/**
	Yes like words.

	@example
	```
	import yesNoWords = require('yes-no-words');

	yesNoWords.yes;
	//=> ['Absolutely', 'Ack', …]
	```
	*/
	readonly yes: Readonly<typeof yes>;

	/**
	No like words.

	@example
	```
	import yesNoWords = require('yes-no-words');

	yesNoWords.no;
	//=> ['Absolutely not', 'Ahhh nah', …]
	```
	*/
	readonly no: Readonly<typeof no>;

	/**
	Both yes and no like words.

	@example
	```
	import yesNoWords = require('yes-no-words');

	yesNoWords.all;
	//=> ['Absolutely', 'Absolutely not', 'Ack', …]
	```
	*/
	readonly all: Readonly<typeof yes> & Readonly<typeof no>;

	/**
	Random yes like words.

	@example
	```
	import yesNoWords = require('yes-no-words');

	yesNoWords.yesRandom();
	//=> 'Yisss'
	```
	*/
	yesRandom(): string;

	/**
	Random no like words.

	@example
	```
	import yesNoWords = require('yes-no-words');

	yesNoWords.noRandom();
	//=> 'Forget it'
	```
	*/
	noRandom(): string;

	/**
	Random yes or no like words.

	@example
	```
	import yesNoWords = require('yes-no-words');

	yesNoWords.allRandom();
	//=> 'NEIN NEIN NEIN'
	```
	*/
	allRandom(): string;
};

export = yesNoWords;
