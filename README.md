[![npm](https://img.shields.io/npm/v/no-sheet-reset.svg?maxAge=2592000)](https://www.npmjs.com/package/no-sheet-reset)
[![Travis](https://img.shields.io/travis/godban/no-sheet-reset.svg?maxAge=2592000)](https://travis-ci.org/godban/no-sheet-reset)
[![Greenkeeper badge](https://badges.greenkeeper.io/godban/no-sheet-reset.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/dt/no-sheet-reset.svg?maxAge=2592000)](https://www.npmjs.com/package/no-sheet-reset)
[![npm](https://img.shields.io/npm/dm/no-sheet-reset.svg?maxAge=2592000)](https://www.npmjs.com/package/no-sheet-reset)

# No Sheet Reset

Start from a scratch. Full CSS reset.

**Please be aware of what you're doing and use it wisely**.
No Sheet Reset clears almost all user agent styles. Your users would not be able to see tab highlights, validation errors, lists markers, etc. unless you provide it back.

Changes default box-sizing behaviour.

## Install

### npm

```
npm install no-sheet-reset
```

## raw file

[index.css](https://raw.githubusercontent.com/godban/no-sheet-reset/master/index.css)


```css
/**
 * https://github.com/godban/no-sheet-reset
 * v1.0.0 | 26.08.2017
 * License: MIT
*/

*,
*::after,
*::before {
  box-sizing: inherit;
}

* {
  background: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  text-align: inherit;
  vertical-align: baseline;
}

html {
  box-sizing: border-box;
}

li {
  list-style-type: none;
}

a {
  text-decoration: inherit;
}
```
