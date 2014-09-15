var makeLinkedList = function() { // functional style instantiation
  
  var list = {}; // this refers to list
  list.head = null; // head node of list
  list.tail = null; // tail node of list
  list.totalNodes = 0; // id tracker variable

  list.addToTail = function(value) { // add to tail in queue-like fashion

    var node = this.makeNode(value);

    if (!this.head && !this.tail ) { // handle first node added

      this[value] = node;
      this.head = node;
      this.tail = node;

    } else {

      this[value] = node;
      // node.previous = this[this.totalNodes - 1].value; 
      this.tail = node;
      this.head.next = node;
    }

  };

  list.removeHead = function() { // remove from head in queue-like fashion

    var eval = this.head;
    delete this[this.head.value];
    this.head = eval.next;
    return eval.value;
  };

  list.contains = function(target){
    return this.hasOwnProperty(target);
  };

  list.makeNode = function(value){ // makes new linked list node
    
    var getUniqueID = function (obj) {
      return function objectId() {
          return list.totalNodes++;
      }
    };

    var node = {};
    node.id = getUniqueID(node)();
    node.value = value;
    node.next = undefined;
    node.previous = undefined;
    return node;

  };

  return list; // returns list Object along with its properties and methods
};



// What is the time complexity of the linked list?
// O(n) for indexing and search // O(1) for insertion/deletion