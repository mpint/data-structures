var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // link makeStack to its methods using Object.create(makeStack)
	

  var stack = Object.create(stackMethods);
  stack.count = 0;
  stack.storage = {};
  return stack;


};

var stackMethods = {};

stackMethods.push = function (value) {
	this.storage[this.count++] = value;
};

stackMethods.pop = function () {
	var temp = this.storage[--this.count];
	// this.count < 0 ? this.count = 0 : '';
	if (this.count < 0) { this.count = 0; }
	delete this.storage[this.count];
	return temp;
};


stackMethods.size = function () {
	return this.count;
};
