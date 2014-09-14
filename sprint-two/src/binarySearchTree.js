var makeBinarySearchTree = function(value){
  var binarySearchTree = {};
  binarySearchTree.left;
  binarySearchTree.right;
  binarySearchTree.value=value;

  extend(binarySearchTree,binaryTreeMethods);
  return binarySearchTree;
};

var extend = function(to,from){
  for(var key in from){
    to[key] = from[key];
  }
};

var binaryTreeMethods = {};
binaryTreeMethods.insert= function(val){
  //use value to identify whether we place new node on left prop or right prop
  //evaluate whether those prop exist
  //if they do exist we traversal
  //else if they don't exist create node and place on left or right prop.

  var node = val>this.value ? this.right:this.left;
  if(node === undefined){
    node = makeBinarySearchTree(val);
    val > this.value? this.right=node : this.left=node;//inserts node into empty slot
  }else{
    node.insert(val);
  }
  //node.insert(val)
};
binaryTreeMethods.contains= function(val){

  var result = false;

  var traverse = function(node){
    if(val === node.value ){
      result = true;
    }
    var curNode = val>node.value? node.right:node.left;
    curNode !== undefined?traverse(curNode):false;
  }
  traverse(this);
  return result;
};
binaryTreeMethods.depthFirstLog= function(callback){
  //execute callback on the result of truth test
  var traverse = function(node){
    if(node){
    var children= [node.left,node.right];
      callback(node.value);

    for(var i = 0; i < children.length; i++){
      traverse(children[i]);
    }
    }
  };

  //callback(this)
  traverse(this);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
