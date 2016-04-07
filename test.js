import test from 'ava';
import x from './';

test(t => {
	t.true(x.yes.length > 0);
	t.true(x.no.length > 0);
	t.true(x.all.length > 0);
	t.truthy(x.yesRandom());
	t.truthy(x.noRandom());
	t.truthy(x.allRandom());
	t.not(x.allRandom(), x.allRandom());
	t.not(x.all.indexOf('Yes'), -1);
	t.not(x.all.indexOf('No'), -1);
});
