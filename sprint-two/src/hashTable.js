var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit); // hashes input string to integer i
  var foundResult = this.retrieve(i); // searches storage for key

  if(foundResult === undefined){

    var containerArray = [];
    var tuple = []; // create tuple object [k, v]
    tuple.push(k,v);
    containerArray.push(tuple); // creates a [[k,v]] structure 
    this._storage.set(i,containerArray); // loads bucket into storage slot in storage Array

  } else {

    var containerArray = this._storage.get(i);
    var tuple =[];
    tuple.push(k,v);
    containerArray.push(tuple);
    this._storage.set(i,containerArray); // loads bucket into storage slot in storage Array

  }
};

HashTable.prototype.retrieve = function(k){ // gets a tuple from storage

  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);  // grabs a bucket from storage using supplied key
  var answer;

  if (result !== undefined && result.length > 1) { // handle case where bucket has the form [[k,v],[k,v],...]

    for (var i = 0 ; i < result.length; i++) {
      if (result[i][0] === k){
        answer = result[i][1];
      }
    }
  } else if (result !== undefined && result.length == 1) { // handles case when [[k,v]]

    answer = result[0][1];
  } else {

    answer = undefined;
  }

  return answer;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i); // returns bucket to result

  if (result !== undefined && result.length > 1) { // handles case where bucket looks like [[k,v],[k,v],...]

    for (var i = 0, len = results.length; i < len; i++) {

      result[i][1] = result[i].indexOf(k) >= 0 ? null : result[i][1];
      this._storage.set(i, result);
    }

  } else if (result !== undefined && result.length == 1) { // handles case where bucket looks like [[k,v]]

    result[0][1] = null;
    this._storage.set(i, result);
  } else {
   
    result = undefined;
  }

  return !!result;
};




/*
 * Complexity: What is the time complexity of the above functions?
    --> O(1) for bucket lookup and O(n) for bucket traversal
 */