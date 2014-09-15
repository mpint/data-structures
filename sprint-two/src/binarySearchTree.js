var makeBinarySearchTree = function(value){
  var binarySearchTree = {};
  binarySearchTree.left;
  binarySearchTree.right;
  binarySearchTree.value = value;

  extend(binarySearchTree,binaryTreeMethods);
  return binarySearchTree;
};

var extend = function(to,from){
  for(var key in from){
    to[key] = from[key];
  }
};

var binaryTreeMethods = {};
binaryTreeMethods.insert = function(val) {
  //use value to identify whether we place new node on left prop or right prop
  //evaluate whether those prop exist
  //if they do exist we traversal
  //else if they don't exist create node and place on left or right prop.

  var node = val > this.value ? this.right : this.left;
  
  if (node === undefined) { // handle case where we reach the bottom of a branch
    node = makeBinarySearchTree(val); // make a new node
    val > this.value ? this.right = node : this.left = node; //inserts node into the empty slot
  } else {
    node.insert(val);
  }
};

binaryTreeMethods.contains = function(val) {

  var result = false;

  var traverse = function(node) { // create a closure to store the result of a truth test
    var curNode;

    result = val === node.value ? true : false; // test if current node is requested node
    curNode = val > node.value ? node.right : node.left; // if test fails, move to next node
    curNode !== undefined ? traverse(curNode) : '' ; // if the node exists, traverse it
  }

  traverse(this); // call traverse recursively to search binary tree for match
  return result;
};

binaryTreeMethods.depthFirstLog= function(callback){
  //execute callback on the result of truth test
  var traverse = function (node) {
    if (node){ // only traverse if node exists to avoid passing traverse an argument of undefined
      var children = [node.left,node.right];
      callback(node.value);

      for (var i = 0; i < children.length; i++) {
        traverse(children[i]);
      }
    }
  };

  traverse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
      --> O(1)
 */
