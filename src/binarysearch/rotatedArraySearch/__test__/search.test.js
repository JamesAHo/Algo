import search from "../search"


describe("the rotated array and search the distinct values.", () =>{
    it("should return output 4. 4 is the index of target value", () =>{
        expect(search([4,5,6,7,0,1,2],0)).toBe(4)
    })
});