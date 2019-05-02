import {expectType} from 'tsd';
import yesNoWords = require('.');

expectType<readonly string[]>(yesNoWords.yes);
expectType<readonly string[]>(yesNoWords.no);
expectType<readonly string[]>(yesNoWords.all);
expectType<string>(yesNoWords.yesRandom());
expectType<string>(yesNoWords.noRandom());
expectType<string>(yesNoWords.allRandom());
