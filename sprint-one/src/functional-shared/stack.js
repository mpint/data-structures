var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;

  extend(someInstance, stackMethods); // merges stackMethods into someInstance

  return someInstance;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods.pop = function () {
	var temp = this[this.count - 1];
	delete this[this.count - 1];
	this.count--;
	return temp;
};

stackMethods.push = function (value) {
	console.log(this.count, value);
	this[this.count] = value;
	this.count++;
	return value;
};

stackMethods.size = function () {
	if (this.count < 0) {
		this.count = 0;
	}	
	return this.count;
};