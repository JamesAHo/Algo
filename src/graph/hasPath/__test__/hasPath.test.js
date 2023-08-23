import hasPath from "../hasPath";



// graph
const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

describe("if the graph has the path",()=>{
    it('return true if graph has the path and false if graph doesnt have the path',()=>{
        expect(hasPath(graph, "f","k")).toBe(true)
    })
})
