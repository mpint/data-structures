var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.count = 0;

  extend(someInstance, queueMethods); // merges stackMethods into someInstance

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {

	this[this.count] = value;
	this.count++;
	return this.count;
};

queueMethods.dequeue = function () {

		var temp = this[0];
		var i = this.count;
		delete this[0];
		this.count--;
		while (i > 1) {
			this[i - 2] = this[i - 1];
			i--;
		}
		return temp;
};

queueMethods.size = function () {
	if (this.count < 0) {
		this.count = 0;
	}

	return this.count;
};