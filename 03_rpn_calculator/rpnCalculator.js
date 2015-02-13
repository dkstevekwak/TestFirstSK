var RPNCalculator = function(){
  this.total = 0
  this.stack = [];
  this.err = "rpnCalculator is empty";
};

RPNCalculator.prototype.value = function(){
  return this.total
}
RPNCalculator.prototype.push = function(num){
  this.stack.push(num)
}
RPNCalculator.prototype.plus = function (){
  if(this.stack.length<2){
    return this.err
  }
  else {
    this.total = (this.stack.pop() + this.stack.pop())
    this.stack.push(this.total)
  }
}
RPNCalculator.prototype.minus = function(){
  if(this.stack.length<2){
    return this.err
  }
  else {
    this.total = (-this.stack.pop() + this.stack.pop())
    this.stack.push(this.total)
  }
}

RPNCalculator.prototype.divide = function(){
  if(this.stack.length<2){
    return this.err
  }
  else {
    this.total = (this.stack.pop()) / (this.stack.pop())
    this.stack.push(this.total)
  }
}

RPNCalculator.prototype.times = function(){
  if(this.stack.length<2){
    return this.err
  }
  else {
    this.total = (this.stack.pop() * this.stack.pop())
    this.stack.push(this.total)
  }
}

var rpnCalculator = new RPNCalculator()



console.log(rpnCalculator)