
Polate
=====

"Small function for interpolating variables into javascript strings.",

##Installation

```sh 
npm install --save polate
```

##Usage

```js

var polate = require('polate');

var result = polate('My name is {{name}}', {name:'My Name'}, {start:'{{', end:'}}'}); 

```

The third argument is an optional options object, if omitted, the start and end markers
default to `{` and `}` respectively.
