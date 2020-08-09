class Graph {
    constructor(v){
        this.vertices = v;
        this.adjList = [];

        for (let i = 0; i < this.vertices; i++){
            this.adjList[i] = [];
            this.adjList[i].push("");
        }
    }
}

const gr = new Graph(5);
console.log(gr.adjList);