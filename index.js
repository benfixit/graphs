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
                const newV = this.adjList[v][i]
                if(!this.visited[newV]){
                    this.depthFirstSearch(newV)
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
console.log(gr.depthFirstSearch(0));