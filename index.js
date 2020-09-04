class Graph {
    constructor(v){
        this.adjList = [];
        this.visited = [];
        this.vertices = v;

        for(let i = 0; i < this.vertices; i++){
            this.adjList[i] = []
        }
    }

    addEdge = (v, w) => {
        this.adjList[v].push(w);
        this.adjList[w].push(v);
    }

    depthFirstSearchRecursive = (vertex) => {
        this.visited[vertex] = true;
        console.log('Visited === ', vertex);
        for(let i = 0; i < this.adjList[vertex].length; i++){
            const tempVert = this.adjList[vertex][i]
            if(!this.visited[tempVert]) {
                this.depthFirstSearchRecursive(tempVert);
            }
        }
    }

    depthFirstSearchIterative = (vertex) => {
        let stack = [];
        stack.push(vertex);
        while(stack.length > 0){
            const tempVertex = stack.pop();

            if(!this.visited[tempVertex]){
                this.visited[tempVertex] = true;
                console.log('Vertex === ', tempVertex);
            }

            for(let i = 0; i < this.adjList[tempVertex].length; i++){
                const newVertex = this.adjList[tempVertex][i];
                if(!this.visited[newVertex]){
                    stack.push(newVertex);
                }
            }
        }
    }

    breadthFirstSearch = () => {

    }
}

const g = new Graph(5);
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)

g.depthFirstSearchIterative(0);

// console.log(gr.adjList)


