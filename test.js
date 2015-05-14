'use strict';
var test = require('ava');
var yesNoWords = require('./');

test(function (t) {
	t.assert(yesNoWords.yes.length > 0);
	t.assert(yesNoWords.no.length > 0);
	t.assert(yesNoWords.all.length > 0);
	t.assert(yesNoWords.yesRandom());
	t.assert(yesNoWords.noRandom());
	t.assert(yesNoWords.allRandom());
	t.assert(yesNoWords.allRandom() !== yesNoWords.allRandom());
	t.assert(yesNoWords.all.indexOf('Yes') !== -1);
	t.assert(yesNoWords.all.indexOf('No') !== -1);
	t.end();
});
