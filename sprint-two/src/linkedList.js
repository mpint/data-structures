var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    var node = makeNode(value);


    if (this.head === null && this.tail === null) {
      this[value] = node;
      this.head = node;
      this.tail = node;
    }else{
      this[value] =  node;
      this.tail = node;
      this.head.next = node;
    }
  };


  list.removeHead = function(){

    var eval = this.head;
    delete this[this.head.value];
    this.head = eval.next;
    return eval.value;
  };


  list.contains = function(target){
    return this.hasOwnProperty(target);
  };


  return list;
};


var makeNode = function(value){
  var node = {};


  node.value = value;
  node.next = null;


  return node;
};

// What is the time complexity of the linked list?
// O(n) for indexing and search // O(1) for insertion/deletion
