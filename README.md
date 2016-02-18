# No Sheet Reset
## Start from a scratch. Full CSS reset. No rewrites. No unpredictables. No shit in debugger.

Simply as hell. Still thinking that universal selector significantly affects your "styles perfomance", I have bad news for you.

[![Build Status](https://travis-ci.org/godban/no-sheet-reset.svg?branch=master)](https://travis-ci.org/godban/no-sheet-reset)

## Install (to be uptodate)

### npm

```
npm install no-sheet-reset
```

### bower

```
bower install no-sheet-reset
```

## or use

### raw files

- [no-sheet-reset.scss](https://raw.githubusercontent.com/godban/no-sheet-reset/master/dist/_no-sheet-reset.scss)
- [no-sheet-reset.css](https://raw.githubusercontent.com/godban/no-sheet-reset/master/dist/no-sheet-reset.css)
- [no-sheet-reset.min.css](https://raw.githubusercontent.com/godban/no-sheet-reset/master/dist/no-sheet-reset.min.css)


### code


```css
*, *::after, *::before {
  box-sizing: inherit;
}

* {
  background: transparent;
  border: 0;
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
```

## Contributing

I'll check out your contribution if you have a clear and comprehensive description for your changes in pull request.


## License

MIT
