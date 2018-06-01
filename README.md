<h1 align="center">
  <br>
  <a href="http://semicolonjs.com"><img src="https://raw.githubusercontent.com/semicolon-package/semicolon.js/master/logo.png" alt="semicolon.js"></a>
  <br>
  semicolon.js
  <br>
</h1>

<h4 align="center">Web development, redefined.</h4>

<p align="center">
  <a href="https://npmjs.com/package/semicolon.js"><img src="https://badge.fury.io/js/semicolon.js.svg" alt="NPM"></a>
  <a href="https://gitter.im/devBanner/Lobby"><img src="http://badges.gitter.im/devBanner/Lobby.svg" alt="Gitter"></a>
</p>

<p align="center">
  <a href="#usage">Usage</a> •
  <a href="#functions">Functions</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>


## Usage

##### Require the module
```javascript
var semicolon = require('semicolon');
```

##### In the browser
```html
<script type="text/javascript" src="./semicolon.js"></script>
```


## Functions


##### Basic semicolon
```javascript
semicolon(); // ;
```

##### The Law of Fives
```javascript
semicolon.law(); // The Law of Semicolons states simply that: semicolons makes you chilled all the time.
```

##### Multilingual
```javascript
semicolon.english(); // semicolon
semicolon.korean(); // 세미콜론
semicolon.german(); // semikolon
```

##### Length
```javascript
semicolon.len(); // 1
```

##### Twins
```javascript
semicolon.twins(); // ; (greek question mark)
```

##### Assertion
```javascript
semicolon.isSemicolon(','); // false
```

##### Cryptography
```javascript
semicolon.mdSemicolon(); // 9eecb7db59d16c80417c72d1e1f4fbf1
semicolon.bcryptSemicolon(); // $2y$10$tvI086gYYhR6SfNO1sLAueVMFgjf.sXEcLJaDOpRjxJ2Z3FIpsqIu
```

##### Different radices
```javascript
semicolon.binary(); // 111011
semicolon.octal(); // 73
semicolon.hex(); // 3b
semicolon.base(4); // 323
semicolon.base(3); // 2012
```

##### Asynchronous Usage
```javascript
semicolon.async(function(err, semicolon) {
  // semicolon === ';'
});
```

##### Filter, Map and Reduce
```javascript
semicolon.filter([';', true, ';']); // [';', ';']
semicolon.map([1, 2, 3]); // [';', ';', ';']
semicolon.reduce([1, 2, 3]); // ;
```


## Download

You can download the package here: [Download ZIP](<https://github.com/devBanner/devBanner_Frontend/archive/gh-pages.zip>)

Or with npm:
```shell
$ npm install semicolon.js
```

## Credits

- Cozy Planes (idea, planning, ...)
- Skayo (setup, perfection, ...)


## License

[Apache License 2.0](https://github.com/semicolon-package/semicolon.js/blob/master/LICENSE)


