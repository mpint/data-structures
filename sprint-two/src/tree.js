var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree,treeMethods);
  return newTree;
};


var extend = function(to,from){
	for(var key in from){
		to[key] = from[key];
	}
}


var treeMethods = {};

treeMethods.addChild = function(value){
	var node = makeTree(value);
	this.children.push(node);
};

treeMethods.contains = function(target){
  var test = false;

  var traverse = function (node) {
    if(target === node.value){
      test = true;
    }
    if(node.children.length > 0){

      for(var i =0;i<node.children.length;i++){
        var curChild = node.children[i];
        traverse(curChild);
      }
    }
  }
  traverse(this);
  return test;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */