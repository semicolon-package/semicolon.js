(function () {

	var semicolon = function() { return ';'; };

	semicolon.law = function() { return 'Makes you chilled all the time.'; };

	semicolon.english = function() { return 'semicolon'; };
	semicolon.korean = function() { return '세미콜론'; };
	semicolon.german = function() { return 'Semikolon'; };

	semicolon.twins = function() { return ';'; }; //greek question mark
	semicolon.len = function() { return 1; };

	semicolon.isSemicolon = function(a) { return a === semicolon(); };

	semicolon.mdSemicolon = function() { return '9eecb7db59d16c80417c72d1e1f4fbf1'; };
	semicolon.bcryptSemicolon = function() { return '$2y$10$tvI086gYYhR6SfNO1sLAueVMFgjf.sXEcLJaDOpRjxJ2Z3FIpsqIu'; };
	
	semicolon.base = function(i) { return semicolon().charCodeAt(0).toString(i); };
	semicolon.binary = function() { return semicolon.base(2); };
	semicolon.octal = function() { return semicolon.base(8); };
	semicolon.hex = function() { return semicolon.base(16); };
	
	semicolon.async = function(callback) {
		process.nextTick(function() {
			callback(null, semicolon());
		});
	};
	
	semicolon.map = function(array) { return array.map(semicolon); };
	semicolon.filter = function(array) { return array.filter(semicolon.isSemicolon); };
	semicolon.reduce = function(array) { return array.reduce(semicolon); };

	if(typeof module !== 'undefined' && module.exports) {
		module.exports = semicolon;
	} else if (typeof define === 'function' && define.amd){
		define(semicolon);
	} else if (window) {
		window.semicolon = semicolon;
	}
}());
