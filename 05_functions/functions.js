var concat_string = function(){
	return Array.prototype.slice.call(arguments).join("");
};

var yourFunctionRunner = function(func, func2){
	if(func2===undefined){
	    return func();
	}
	else {
	return	func()+func2();    
	}
};  

var makeAdder = function(num){
    var i = num
	var second = function(number){
		return number+i;
	};
	return second;
};

var once = function(func){
   var runAlready = false;
	return function(){
		if(!runAlready){
			func();
			runAlready = true;

		}
    }
}; 
   


var createObjectWithTwoClosures = function() {
	var total = 0;
	var object = {};
	object.oneIncrementer = function(){
		total+=1;
	};
	object.tensIncrementer = function() {
		total+=10;
	};
	object.getValue = function() {
		return total;
	};
	return object;
};