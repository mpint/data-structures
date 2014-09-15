// NOTES
// you can add connected nodes MANUALLY with addNode using two args
// if there is only one node, the next node added should automatically connect
    // this case calls addEdge between the passed node and its nearest node?
// nodes with no edges are destroyed
    // should be implemented in removeEdge

var Graph = function(){
// this refers to the graph variable
  this.totalNodes = 0;
  this.totalEdges = 0;

  this.graph = []; // the graph container

};

Graph.prototype.addNode = function(newNode, toNode){
  // adds a node to this.graph
  // does it handle case where node === second node added --> connect to first node

  var node = {
    value: newNode,
    edges: []
  };

  if (this.totalNodes === 1) { // handles second node addition
    ++this.totalNodes;
    this.graph[this.totalNodes - 1] = node;
    this.addEdge(this.graph[0].value, this.graph[1].value);

  } else if (newNode && toNode) { // handles connected node addition

  	++this.totalNodes;
  	this.graph[this.totalNodes - 1] = node;
    this.addEdge(newNode, toNode);

  } else {  // handles disconnected node addition

  	++this.totalNodes;
  	this.graph[this.totalNodes - 1] = node;
  }

};

Graph.prototype.contains = function(node){

	if (this.totalNodes) {

	  for (var i = 0, len = this.graph.length; i < len; i++) {
	    if (this.graph[i] !== undefined && node === this.graph[i].value) { return true; }
	  }
}
  return false;
};

Graph.prototype.removeNode = function(node){


	for (var i = 0, len = this.graph.length; i < len; i++) {
		var current = this.graph[i];

		if (node === current.value) { 

			var temp = current;
			delete this.graph[i];
			--this.totalNodes;
			return temp;
		}
	}
};

Graph.prototype.getEdge = function(fromNode, toNode){
	var fromTemp, toTemp;
	for (var i = 0, len = this.graph.length; i < len; i++) {
		
		var current = this.graph[i];
		if (current.value === fromNode) {

			fromTemp = current.edges.indexOf(toNode) >= 0 ? true : false;
		}
		else if (current.value === toNode) {

			toTemp = current.edges.indexOf(fromNode) >= 0 ? true : false;
		}
	}

	return fromTemp && toTemp ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // add edge from a node with fromNode value to toNode value
	var fromTemp, toTemp;

  for (var i = 0, len = this.graph.length; i < len;  i++) { 
  	var current = this.graph[i];
  	if ( current.value === fromNode) { fromTemp = true; this.graph[i].edges.push(toNode); }
  	else if ( current.value === toNode) { toTemp = true; this.graph[i].edges.push(fromNode); }
  }
  
	fromTemp && toTemp && ++this.totalEdges;

};

Graph.prototype.removeEdge = function(fromNode, toNode){

	// check if two nodes are present and connected 
	// if yes, get indexOf fromNode and toNode and remove it
	var tempFrom, tempTo, fromEdge, toEdge, current;
	for (var i = 0, len = this.graph.length; i < len; i++) {
		current = this.graph[i];
		fromEdge = current.edges.indexOf(fromNode);
		toEdge = current.edges.indexOf(toNode);

		if (fromEdge >= 0) {
			current.edges[fromEdge] = undefined;
		}
		else if (toEdge >= 0) {
			current.edges[toEdge] = undefined;
		}
		
		if (current.edges.every(function (val, i, list) {
			return val === undefined;
		})) {
			this.graph[i] = undefined;
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 	--> O(n) (would have been O(1) if graph container was an Object instead of Array)
 */
