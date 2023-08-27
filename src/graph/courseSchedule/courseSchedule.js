/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

import buildGraph from "../buildGraph/buildGraph";

export default function courseSchedule(numCourses, prerequisites){
    let visited = new Set();
    let graph = buildGraph(prerequisites)
    console.log(graph)
    return explore(graph, prerequisites, visited)
}
var explore = function(graph, prerequisites, visited){

    if(visited.has(prerequisites)) return false;
    visited.add(prerequisites)
    if(explore(graph, prerequisites, visited) === true){
        return true
    }
}