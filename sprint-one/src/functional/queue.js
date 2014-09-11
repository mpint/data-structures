var makeQueue = function(){
 var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[size] = value;
    someInstance[value] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var evalSize = size;
    var result = storage[0];
    delete storage[0];
    delete someInstance[result];
    size--;
    while (evalSize > 1){
      storage[evalSize - 2] = storage[evalSize - 1];
      evalSize--;
    }
    delete storage[size];
    return result;
  };

  someInstance.size = function(){
  	if(size < 0) {
  		size = 0;
  	}
    return size;
  };
  
  return someInstance;
};
