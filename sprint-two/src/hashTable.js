var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //calling each using a function to iterate through index compare index === i
  //var collision = true;
  var i = getIndexBelowMaxForKey(k, this._limit);
  //var i = this.hashFunction(k, this._limit);
  var foundResult = this.retrieve(i);
  if(foundResult === undefined){
    var containerArray = [];
    var tuple = [];
    tuple.push(k,v);
    containerArray.push(tuple);
    this._storage.set(i,containerArray);
  }else{
    var containerArray = this._storage.get(i);
    var tuple =[];
    tuple.push(k,v);
    containerArray.push(tuple);
    this._storage.set(i,containerArray);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var answer;

  var result = this._storage.get(i);
  if(result !== undefined && result.length > 1){

    var eval = this._storage.get(i);
    debugger;
    for(var p = 0;p<eval.length;p++){
      if(eval[p][1] === k){
        answer =eval[p][1];
      }
    }
  }else if(result !== undefined && result.length == 1){

    var eval = this._storage.get(i);
    answer = eval[0][1];
  }else{
    answer = undefined;
  }
  return answer;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);
  if(result !== undefined && result.length > 1){

  }else if(result !== undefined && result.length == 1){
    var eval = this._storage.get(i);
    eval[0][1] = null;
    this._storage.set(i, eval);
  }else{
    answer = undefined;
  }
  //this._storage.set(i, null);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */