function bfs(rootNode, vertices, edges){
  let order = []
  let queue = [rootNode]
  
  while (queue.length > 0) {
    let firstNode = queue.shift()
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
    markDistanceAndPredecessor(firstNode, adjacentVertices)
    console.log('firstNode', firstNode.name)
    // console.log('adjacentVertices', adjacentVertices)
    queue = queue.concat(adjacentVertices)
    order = order.concat(adjacentVertices)
  }
  return order
}

function findAdjacent(node, vertices, edges) {
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
      if (node.name === vertex && node.predecessor === null) {
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
