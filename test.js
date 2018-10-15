import test from 'ava';
import yesNoWords from '.';

test('main', t => {
	t.true(yesNoWords.yes.length > 0);
	t.true(yesNoWords.no.length > 0);
	t.true(yesNoWords.all.length > 0);
	t.truthy(yesNoWords.yesRandom());
	t.truthy(yesNoWords.noRandom());
	t.truthy(yesNoWords.allRandom());
	t.not(yesNoWords.allRandom(), yesNoWords.allRandom());
	t.not(yesNoWords.all.indexOf('Yes'), -1);
	t.not(yesNoWords.all.indexOf('No'), -1);
});
