var factorialIterative = function(num){
	var total = 1
	for (var i = 1; i <=num; i++){
		total *= i
	}
	return total;
}

var factorial = function(num){
	if (num === 0) {
		return 1
	}
		return num * factorial(num-1)
}


var fib = function(num){
	if (num===0||num===1) {
		return 1
	}
	return fib(num-1)+fib(num-2)
}

var type = function(tp){
    var a = Object.prototype.toString.call(tp)
    return a.substring(8,a.length-1)
}
;

var stringify = function(input) {
	if(type(input) === "Undefined" || type(input) === "Null") {
		return type(input).toLowerCase();
	}
	else if (type(input) === "String") {
		return '"'+input+'"';
	}
	else if (type(input) === "Array") {
		var arr = [];
		for (var i = 0; i<input.length ; i++) {
			arr.push(stringify(input[i]));
		}
		return '['+arr.join()+']';
	}
	else if (type(input) === "Object") {
		var arr = []
		for (var key in input) {
			arr.push('"'+key+'"'+": "+stringify(input[key]));
		}
		return '{'+arr.join()+'}';
	}
	else {
		return input.toString();
	}	
};