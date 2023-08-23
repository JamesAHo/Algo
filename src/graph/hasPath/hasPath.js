
const graph = {
    f: [g,i],
    g: [h],
    h: [],
    i: [g,k],
    j: [j],
    k: []
}

// n = # of nodes
// e = # of edges
// time complexity is O(e)
// space complexity is O(n)
// using DFS traversal 

export default function hasPath(graph, source, dst){
    // return true if the source = destination
    if(source === dst) return true
    for(let neighbor of graph[source]){
        if(hasPath(graph, neighbor, dst) === true){
            return true
        }

    }
    return false
}