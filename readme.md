# yes-no-words [![Build Status](https://travis-ci.org/sindresorhus/yes-no-words.svg?branch=master)](https://travis-ci.org/sindresorhus/yes-no-words)

> Get yes/no like words

![](https://cloud.githubusercontent.com/assets/170270/7630384/c62755ba-fa35-11e4-95a3-a9c51d376f4b.png)

*The lists are just JSON files and can be used wherever.*


## Install

```
$ npm install --save yes-no-words
```


## Usage

```js
var yesNoWords = require('yes-no-words');

yesNoWords.yesRandom();
//=> 'Yisss'
```


## API

### .yes

Type: `array`

Yes like words.

### .no

Type: `array`

No like words.

### .all

Type: `array`

Both yes and no like words.

### .yesRandom()

Type: `function`

Random yes like words.

### .noRandom()

Type: `function`

Random no like words.

### .allRandom()

Type: `function`

Random yes or no like words.


## CLI

```
$ npm install --global yes-no-words
```

```
$ yes-no --help

  Examples
    $ yes-no
    Yisss

    $ yes-no --all --type yes
    Absolutely
    Affirmative
    ...

  Options
    --all   Get all words instead of a random word
    --type  Type of word: yes|no|all  Default: all
```


## Related

- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
