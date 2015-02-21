
var repeat = function(text, num){
	var string = ""
	for(var i = 0; i < num; i++){
		string+=text;
	};
	return string;
};

var sum = function(array){
	var total = 0;
	for(var i=0; i<array.length; i++){
		total+=array[i];
	};
	return total;
};

var gridGenerator = function(num){
	var output = ""
	for(var i = 0; i<num; i++) {
		for(var j = 0; j<num; j++){
		    if ((i+j) % 2 ===0){
		        output +="#"
		        }
		    else {
		        output += " "        
		        }
		    };
		    output += "\n"
		};

	return output
};

function largestTriplet(num){
	var a;
	for(var c = num; c > 0; c--){
		for(var b = c-1; b > 0; b--){
			a = Math.sqrt((c*c) - (b*b));
			if(a % 1 === 0){
				return [a,b,c];
			}
		}
	}
}


var join = function(array,special) {
	var converted = array.toString();
	var con = "";
	array.type = 'fruits'
	for (var i = 0; i < converted.length; i++){
    	    con += converted[i];
	    };
    if(special === undefined){
        var final1 = con.replace(/,/g,'');
        return final1;
    }
    else {
        var final = con.replace(/,/g,special);
        return final;
    }
    array.first = function(){
    	return array[0];
    };
}

var paramify = function(object){
    var string = ""
    var array = [];
	for(var key in object) {
		if(object.hasOwnProperty(key)){
			array.push(key+'='+object[key]);
		};    
	}; 
	return array.sort().join('&')
};


