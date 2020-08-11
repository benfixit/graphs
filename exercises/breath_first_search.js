function breadthFirstSearch(vertex){
    const queue = [];
    queue.push(vertex);
    this.visited[vertex] = true;
    while(queue.length > 0){
        const temp = queue.shift();
        if(this.visited[temp]){
            console.log('Visited === ', temp);
        }
        for(let i = 0; i < this.adjList[temp].length; i++){
            const newVertex = this.adjList[temp][i];
            if(!this.visited[newVertex]){
                queue.push(newVertex);
                this.visited[newVertex] = true;
            }
        }
    }
}

module.exports = breadthFirstSearch