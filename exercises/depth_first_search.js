const { GraphObject } = require('../index');

function depthFirstSearch(vertex){
    this.visited[vertex] = true;
    if(this.visited[vertex]){
        console.log('Visited Vertex === ', vertex);
    }
    for(let i = 0; i < this.adjList[vertex].length; i++){
        const newVertex = this.adjList[vertex][i];
        if(!this.visited[newVertex]){
            depthFirstSearch(newVertex);
        }
    }

}

module.exports = depthFirstSearch