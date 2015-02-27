var Mammal = function(name) {
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function(){
	return "My name is "+this.name+", I'm a Mammal";
};


Mammal.prototype.haveBaby = function(){
	    // Object.create(Mammal.prototype);
		var babyName = "Baby " + this.name;
		var newBaby = new Mammal(babyName)
		this.offspring.push(newBaby)
		return newBaby
	};


var Cat = function(name, color){
	Mammal.call(this, name);
	this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype)


// Mammal.prototype = {consturctor; }

Cat.prototype.haveBaby = function(color){
	var catBabyName = "Baby " + this.name;
	var kitten = new Cat(catBabyName, color);
	this.offspring.push(kitten);
	return kitten
};
