function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  let order = [rootNode]
  let queue = [rootNode]
  
  while (queue.length > 0) {
    let firstNode = queue.shift()
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
    order = order.concat(adjacentVertices)
    markDistanceAndPredecessor(firstNode, adjacentVertices)
    queue = queue.concat(adjacentVertices)
  }
  return order
}

function findAdjacent(nodeName,  vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
    return node.distance == null;
  })
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  for (let element of adjacentNodes) {
    element.distance = node.distance + 1
    element.predecessor = node
  }
}
