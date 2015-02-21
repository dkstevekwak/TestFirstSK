// 06_Functional 


var map = function(array, itFunction) {
	var resultArray = [];
	for (var i = 0; i < array.length; i++){
		resultArray.push(itFunction(array[i]));
	};
	return resultArray;
};



var doubler = function(num) {
	return num*2;
};

var filter = function(array, itFunction) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		if (itFunction(array[i])===true){
			result.push(array[i]);
		};
	};
	return result;
};

var contains = function(input, check){
	if(Array.isArray(input) === true) {
		if (input.indexOf(check)!=-1) {
			return true;
			}
		else {
			return false;
			}
		}
	else {
		var array = [];
		for(key in input) {
		  array.push(input[key])  
		};
		if (array.indexOf(check)!=-1) {
			return true;
			}
			else {
			return false;
			}
		};
};

var countWords = function(string) {
	var splitted = string.split(" ");
	return splitted.length;
}

var reduce = function (array, startVal, func){
	var currentVal = startVal;
	for (var i = 0; i < array.length; i++) {
		currentVal = func(currentVal, array[i]);
	};
	return currentVal;
};

var countWordsInReduce = function(original, wordsCounted) {
	return original + countWords(wordsCounted);
};

var sum = function(numArray) {
	return reduce(numArray,0,function(a,b) {
		return a+b;
	});
};

var every = function(array,func) {
	var status = true;
	for (var i = 0; i < array.length; i++) {
		if (func(array[i])===true) {
			status = true;
		}
		else {
			status = false;
			return status;
		}	
	};
	return status;
};

var any = function(array,func) {
	var status = false;
	for (var i = 0; i < array.length; i++) {
		if (func(array[i])===true) {
			status = true;
			return true;
		}
		else {
			status = false;
		}	
	};
	return status;
}


