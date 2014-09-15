var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){

  if(this[item] === undefined){
  this[item]=item;
  return true;
  }
  return false;
};

setPrototype.contains = function(item){
  return this.hasOwnProperty(item);
};

setPrototype.remove = function(item){

   return this.hasOwnProperty(item)? delete this[item]: false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */