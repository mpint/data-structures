var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
  	storage[size] = value;
  	someInstance[value] = value;
  	size++;
  	return size;
  };

  someInstance.pop = function(){
  	var temp = storage[--size];
  	delete storage[size];
  	delete someInstance[temp];
  	return temp;
  };

  someInstance.size = function(){
  if (size < 0) {
  	size = 0;
  }
  return size;
  };

  return someInstance;
};