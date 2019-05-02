# yes-no-words [![Build Status](https://travis-ci.org/sindresorhus/yes-no-words.svg?branch=master)](https://travis-ci.org/sindresorhus/yes-no-words)

> Get yes/no-like words

![](https://cloud.githubusercontent.com/assets/170270/7630384/c62755ba-fa35-11e4-95a3-a9c51d376f4b.png)

*The lists are just JSON files and can be used anywhere.*


## Install

```
$ npm install yes-no-words
```


## Usage

```js
const yesNoWords = require('yes-no-words');

yesNoWords.yesRandom();
//=> 'Yisss'
```


## API

### .yes

Type: `string[]`

Yes like words.

### .no

Type: `string[]`

No like words.

### .all

Type: `string[]`

Both yes and no like words.

### .yesRandom()

Type: `Function`

Random yes like words.

### .noRandom()

Type: `Function`

Random no like words.

### .allRandom()

Type: `Function`

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
    …

  Options
    --all   Get all words instead of a random word
    --type  Type of word: yes|no|all  [Default: all]
```


## Related

- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
