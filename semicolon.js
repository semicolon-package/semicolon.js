(function () {

	var semicolon = function() { return ';'; };

	semicolon.law = function() { return 'Makes you chilled all the time.'; };

	semicolon.english = function() { return 'semicolon'; };
	semicolon.korean = function() { return '세미콜론'; };
	semicolon.german = function() { return 'Semikolon'; };

	semicolon.twins = function() { return ';'; }; //greek question mark
	semicolon.len = function() { return 1; };

	//todo: not sure how it works (Seriously?)
	semicolon.isSemicolon = function(a) { return a === semicolon(); };


	if(typeof module !== 'undefined' && module.exports) {
		module.exports = semicolon;
	} else if (typeof define === 'function' && define.amd){
		define(semicolon);
	} else if (window) {
		window.semicolon = semicolon;
	}
}());
