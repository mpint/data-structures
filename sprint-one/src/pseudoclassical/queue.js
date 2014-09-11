var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;
  this.bottom = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
	this.storage[this.bottom + this.count++] = value;
};

Queue.prototype.dequeue = function () {
	if (this.count) {
		var temp = this.storage[this.bottom];
		delete this.storage[this.bottom];
		this.bottom++;
		this.count--;
		return temp;
  }
  return;
};

Queue.prototype.size = function () {
	return this.count;
};