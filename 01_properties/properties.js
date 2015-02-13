var setPropertiesOnObjLiteral = function(object) {
	object.x = 7;
	object["y"] = 8;
	object.onePlus = function (num){
		var total = 1;
		total += num;
		return total;
	};
};

var setPropertiesOnArrayObj = function(arrayObject) {
	arrayObject.hello = function () {
		return "Hello!";
	};
	arrayObject.full = "stack";
	arrayObject[0] = 5;
	arrayObject.twoTimes = function(num) {
		var twice = 2;
		twice *= num;
		return twice;
	};
};

var setPropertiesOnFunctionObj = function(obj) {
	obj.year = 2015;
	obj.divideByTwo = function(num){
		var total = 1;
		total = num/2;
		return total;
	};
    obj.prototype.helloWorld = function() {
    	return "Hello World";
    };

 };


