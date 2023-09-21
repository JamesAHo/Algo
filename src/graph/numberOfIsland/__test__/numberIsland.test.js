import numberIsland from "../numberIsland";

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  describe("the numbers of island on the grid",()=>{
    it('return the number of island on the grid',()=>{
        expect(numberIsland(grid)).toStrictEqual(3)
    })
})
