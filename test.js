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

assert.equal('9eecb7db59d16c80417c72d1e1f4fbf1', semicolon.mdSemicolon(), 'The MD5 Hash of ";" should be "9eecb7db59d16c80417c72d1e1f4fbf1"');
assert.equal('$2y$10$tvI086gYYhR6SfNO1sLAueVMFgjf.sXEcLJaDOpRjxJ2Z3FIpsqIu', semicolon.bcryptSemicolon(), 'The Bcyrpt Hash of ";" should be "$2y$10$tvI086gYYhR6SfNO1sLAueVMFgjf.sXEcLJaDOpRjxJ2Z3FIpsqIu"');

assert.equal('111011', semicolon.binary(), 'The binary respresentation of ";" should be "111011"');
assert.equal('73', semicolon.octal(), 'The octal respresentation of ";" should be "73"');
assert.equal('3b', semicolon.hex(), 'The hexadecimal respresentation of ";" should be "3b"');

assert.equal('214', semicolon.base(5), 'A quinary semicolon should be 214');
assert.equal('323', semicolon.base(4), 'An quaternary semicolon should be 323');

assert.equal(JSON.stringify([';', ';']), JSON.stringify(semicolon.filter([';', true, ';'])));
assert.equal(JSON.stringify([';', ';', ';']), JSON.stringify(semicolon.map([1, 2, 3])));
assert.equal(';', semicolon.reduce([1, 2, 3]));

var asyncTests = 1;
semicolon.async(function(err, semicolon) {
	assert.equal(err, null, 'Async should not result in an error.');
	assert.equal(semicolon, ';', 'Async should pass ";" to callback.');
	asyncTests--;
});

setInterval(function() {
	if (!asyncTests) {
		process.exit(0);
	}
}, 100);