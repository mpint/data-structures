var makeTree = function(value){  // functional shared instantiation pattern

  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree,treeMethods);
  
  return newTree; // returns newTree Object with its extended helper treeMethods
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

  var traverse = function (node) { // closure for traversal to store tes

    test = target === node.value ? !test : test; // contains truth test

    if (node.children.length > 0) {

      for (var i = 0; i < node.children.length; i++) {
        var child = node.children[i];
        traverse(child);
      }
    }
  }

  traverse(this);
  return test;
};


/*
 * Complexity: What is the time complexity of the above functions?
    --> 
 */