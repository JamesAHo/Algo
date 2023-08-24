import buildGraph from "../buildGraph"


const edges = [[0,1],[1,2],[2,0]]
describe("the graph that build from the given edges",()=>{
    it('return an object, there are nodes with associated edges',()=>{
        expect(buildGraph(edges)).toStrictEqual({ '0': [ 1, 2 ], '1': [ 0, 2 ], '2': [ 1, 0 ] })
    })
})