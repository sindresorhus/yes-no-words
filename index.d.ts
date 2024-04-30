declare const yesNoWords: {
	/**
	Yes like words.

	@example
	```
	import yesNoWords from 'yes-no-words';

	yesNoWords.yes;
	//=> ['Absolutely', 'Ack', …]
	```
	*/
	readonly yes: readonly string[];

	/**
	No like words.

	@example
	```
	import yesNoWords from 'yes-no-words';

	yesNoWords.no;
	//=> ['Absolutely not', 'Ahhh nah', …]
	```
	*/
	readonly no: readonly string[];

	/**
	Both yes and no like words.

	@example
	```
	import yesNoWords from 'yes-no-words';

	yesNoWords.all;
	//=> ['Absolutely', 'Absolutely not', 'Ack', …]
	```
	*/
	readonly all: readonly string[];

	/**
	Random yes like words.

	@example
	```
	import yesNoWords from 'yes-no-words';

	yesNoWords.yesRandom();
	//=> 'Yisss'
	```
	*/
	yesRandom(): string;

	/**
	Random no like words.

	@example
	```
	import yesNoWords from 'yes-no-words';

	yesNoWords.noRandom();
	//=> 'Forget it'
	```
	*/
	noRandom(): string;

	/**
	Random yes or no like words.

	@example
	```
	import yesNoWords from 'yes-no-words';

	yesNoWords.allRandom();
	//=> 'NEIN NEIN NEIN'
	```
	*/
	allRandom(): string;
};

export default yesNoWords;
