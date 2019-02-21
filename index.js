function bfs(rootNode, vertices, edges){
  let order = [rootNode]
  let queue = [rootNode]
  
  while (queue.length > 0) {
    let firstNode = queue.shift()
    let adjacentVertices = findAdjacent(firstNode['name'], vertices, edges)
    markDistanceAndPredecessor(firstNode, adjacentVertices)
    if (adjacentVertices.length > 0) {
      queue.push(adjacentVertices) 
    }
    // order.push(adjacentVertices)
  }
  // return order
}

function findAdjacent(node, vertices, edges) {
  console.log('findAdjacent called' , node)
  let adjacentEdges = []
  for (let element of edges) {
    if (element.includes(node)) {
      adjacentEdges.push(element)
    }
  }
  let adjacentNodes= []
  adjacentEdges.forEach(subArray => {
    let vertex = subArray.find(vertex => (
      vertex !== node
    ))
    for (let node of vertices) {
      if (node.name === vertex && node.distance === null) {
        adjacentNodes.push(node)
      }
    }
  })
  return adjacentNodes
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  for (let element of adjacentNodes) {
    element.distance = node.distance + 1
    element.predecessor = node
  }
}
