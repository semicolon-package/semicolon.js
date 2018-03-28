(function () {

  var semicolon = function() { return ';'; };

  semicolon.law = function() { return 'Makes you chilled all the time.'; };

  semicolon.english = function() { return 'semicolon'; };
  semicolon.korean = function() { return '세미콜론'; };
  semicolon.twins = function() { return ';'; }; //greek question mark
  semicolon.length = function() { return '1'; };
                          
  //todo: not sure how it works
  semicolon.isSemicolon = function(a) { return a === semicolon(); };

 

}());
