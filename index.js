import uniqueRandomArray from 'unique-random-array';
import yesWords from './yes-words.json' with {type: 'json'};
import noWords from './no-words.json' with {type: 'json'};

const allWords = yesWords.concat(noWords).sort();

const yesNoWords = {};

yesNoWords.yes = yesWords;
yesNoWords.no = noWords;
yesNoWords.all = allWords;
yesNoWords.yesRandom = uniqueRandomArray(yesWords);
yesNoWords.noRandom = uniqueRandomArray(noWords);
yesNoWords.allRandom = uniqueRandomArray(allWords);

export default yesNoWords;
