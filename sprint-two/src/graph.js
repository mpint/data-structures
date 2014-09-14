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
  this.end = this.totalNodes;
  this.graph = []; // the graph container

};

Graph.prototype.addNode = function(newNode, toNode){
  // adds a node to this.graph
  // does it handle case where node === second node added --> connect to first node

  var node = {
    value: newNode,
    edges: (function () { toNode ? [toNode] : []; })()
  };
  debugger;

  if (this.totalNodes === 1) {
    ++this.totalNodes && ++this.totalEdges;
    this.graph[this.end] = node;
    // add edge here
  } else {

  ++this.totalNodes;
  this.graph[this.end] = node;
  }

};

Graph.prototype.contains = function(node){
  for (var i = 0, len = this.graph.length; i < len; i++) {
    if (node === this.graph[i].value) { return true; }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
