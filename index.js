class Graph {
    constructor(v){
        this.vertices = v;
        this.adjList = [];
        this.edges = 0;
        this.visited = []

        for (let i = 0; i < this.vertices; i++){
            this.adjList[i] = [];
        }
    }

    addEdge = (v, w) => {
        this.adjList[v].push(w);
        this.adjList[w].push(v);
        this.edges++;
    }

    showGraph = () => {
        for(let i = 0; i < this.adjList.length; i++){
            let str = `${i} -> `;
            for (let j = 0; j < this.adjList[i].length; j++){
                str += ` ${this.adjList[i][j]}`;
            }
            console.log(str);
        }
    }

    depthFirstSearch = (v) => {
        this.visited[v] = true
        if (this.adjList[v]) {
            console.log('Visited Vertex === ', v)
            for(let i = 0; i < this.adjList[v].length; i++){
                const newVertex = this.adjList[v][i]
                if(!this.visited[newVertex]){
                    this.depthFirstSearch(newVertex)
                }
            }
        }
    }

    breadthFirstSearch = (v) => {
        this.visited[v] = true
        this.queue = [];
        this.queue.push(v);
        while(this.queue.length > 0){
            const item = this.queue.shift();
            if (this.visited[item]){
                console.log('Visited Vertex === ', item)
            }
            for(let i = 0; i < this.adjList[item].length; i++){
                const newVertex = this.adjList[item][i]
                if(!this.visited[newVertex]){
                    this.visited[newVertex] = true
                    this.queue.push(newVertex)
                }
            }
        }
    }
}

const gr = new Graph(5);
gr.addEdge(0, 1)
gr.addEdge(0, 2)
gr.addEdge(1, 3)
gr.addEdge(2, 4)
console.log(gr.breadthFirstSearch(0));