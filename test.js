var assert = require('assert');
var semicolon = require('./');

assert.equal(';', semicolon(), 'Semicolon should give you ;');
assert.notEqual(',', semicolon(), 'Semicolon should not give you not ;');

assert.equal('Makes you chilled all the time.', semicolon.law(), 'The Law of Semicolons should never be wrong');

assert.equal('semicolon', semicolon.english(), 'A english semicolon should be semicolon');
assert.equal('세미콜론', semicolon.korean(), 'A korean semicolon should be 세미콜론');
assert.equal(';', semicolon.twins(), 'A twin of the semicolon should be ;');
assert.equal(1, semicolon.len(), 'The length of a semicolon should be 1');

assert.equal(true, semicolon.isSemicolon(semicolon()));
assert.equal(false, semicolon.isSemicolon('.'));