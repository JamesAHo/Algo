/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

import buildGraph from "../buildGraph/buildGraph";

export default function courseSchedule(numCourses, prerequisites){
    let visited = new Set();
    let graph = buildGraph(prerequisites)
    console.log(graph);
    for(let course = 0; course < numCourses; course++){
        if(!explore(graph,course,visited)){
            return false;
        }
    }
    return true
}
var explore = function(graph, course, visited){

    if(visited.has(numCourses)) return false;
    visited.add(numCourses)
    for(let nei of graph[course]){
        if(!explore(graph, prerequisites, visited) === true){
            return false;
        }
    }
    return true;
}