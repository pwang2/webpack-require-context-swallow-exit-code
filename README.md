# ABOUT
webpack require context will give warning on any syntax error.

## Prerequisites
make sure have webpack installed gloablly and just open terminal type > webpack to build

## Reproduce Steps
1. add a syntax error in util.js require by index.js directly will fail webpack build with exit code 2.
```
ERROR in ./util.js
Module parse failed: /Users/pwang/Works/webpack-require-context-swallow-exit-code/util.js Unexpected token (3:2)
You may need an appropriate loader to handle this file type.
| export default {
|   a: 1
|   b: 2
| };
|
 @ ./index.js 1:0-29
 @ multi ./index.js
```

2. fix added error, then add a syntax error in mod1.js loaded by require.context will always give exit code 0 and gives just a WARNING.

```
WARNING in ./src/mod1.js
Module parse failed: /Users/pwang/Works/webpack-require-context-swallow-exit-code/src/mod1.js Unexpected token (1:2)
You may need an appropriate loader to handle this file type.
| I know you will fail
|
 @ ./src ^\.\/.*$
 @ ./index.js
 @ multi ./index.js
```
----
