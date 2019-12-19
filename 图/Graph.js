class Graph {
    constructor() {
        this.vertexes = [] // 存储顶点
        this.adjList = new Dictionay() // 存储边
    }

    addVertex(v) {
        this.vertexes.push(v)
        this.adjList.set(v, [])
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    toString() {
        let resultStr = ""
        for (let i = 0; i < this.vertexes.length; i++) {
            resultStr += this.vertexes[i] + "->"
            let adj = this.adjList.get(this.vertexes[i])
            for (let j = 0; j < adj.length; j++) {
                resultStr += adj[j] + " "
            }
            resultStr += "\n"
        }
        return resultStr
    }
}

module.exports = Graph

// // 测试代码
// let graph = new Graph()

// // 添加顶点
// let myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
// for (let i = 0; i < myVertexes.length; i++) {
//     graph.addVertex(myVertexes[i])
// }

// // 添加边
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');

// console.log(graph.toString());