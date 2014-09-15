var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = Object.create(queueMethods);
  stack.count = 0;
  stack.bottom = 0;
  stack.storage = {};
  return stack;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
	this.storage[this.bottom + this.count++] = value;
};

queueMethods.dequeue = function () {	
	if (this.count) {
		var temp = this.storage[this.bottom];
		delete this.storage[this.bottom];
		this.bottom++;
		this.count--;
		return temp;
	}

	return;
};

queueMethods.size = function () {
	return this.count;
};