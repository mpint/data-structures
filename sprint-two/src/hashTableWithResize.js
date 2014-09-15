var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var idx = getIndexBelowMaxForKey(k, this._limit);

  // retrieve a bucket
  var bucket = this._storage.get(idx);
  // if not exist, create
  if( !bucket ) {
    bucket = [];
    this._storage.set(idx, bucket);
  }

  var found = false;

  // iterate over bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // key exists?
    if( tuple[0] === k) {
      // update it
      tuple[1] = v;
      found = true;
      break;
    }
  }
  // if no key found
  if( !found ){
    this._count++;
    bucket.push([k,v]);
    if( this._count > 0.75*this._limit ){
      this._resize( this._limit * 2 );
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(idx);
  // if not exist, create
  if( !bucket ) {
    return null;
  }

  var found = false;

  // iterate over bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // key exists?
    if( tuple[0] === k) {
      // update it
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(idx);
  // if not exist, create
  if( !bucket ) {
    return;
  }

  var found = false;

  // iterate over bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // key exists?
    if( tuple[0] === k) {
      // delete it and return it
      this._count--;
      bucket.splice(i,1);
      if( this._count < 0.25*this._limit ){
        this._resize( this._limit / 2 );
      }
      return tuple[1];
    }
  }
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
  // var _this = this;
  // iterate through hashTable
  oldStorage.each(function(bucket) {
    if(!bucket) {
      return;
    }
    for(var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));

}
