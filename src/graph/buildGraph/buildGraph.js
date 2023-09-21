
// given edges of the graph then convert it to graph object
// example: graph = {a:["b", c]}

export default function buildGraph(edges){
    const graph = {};
    for(let edge of edges){
        const [a,b] = edge
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a)
    }
    return graph;
}