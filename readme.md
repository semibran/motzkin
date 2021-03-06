# motzkin
![non-intersecting chords between n points on a circle](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/MotzkinChords4.svg/300px-MotzkinChords4.svg.png)

A small function for calculating [Motzkin numbers](https://en.wikipedia.org/wiki/Motzkin_number).

## usage
[![NPM](https://nodei.co/npm/motzkin.png?mini)](https://www.npmjs.com/package/motzkin)
```js
> const motzkin = require('motzkin')
> motzkin(4)
9

> motzkin(-1)
NaN
```

## see also
- [`semibran/delannoy`](https://github.com/semibran/delannoy) - calculate Delannoy numbers
- [`semibran/narayana`](https://github.com/semibran/narayana) - calculate Narayana numbers
- [`semibran/schroeder`](https://github.com/semibran/schroeder) - calculate Schröder numbers

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
