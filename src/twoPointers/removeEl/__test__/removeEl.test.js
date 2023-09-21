import removeElements from "../removeElements";

describe("remove Elements", () =>{
    it("should return the expected answer with correct length.", () =>{
        expect(removeElements( [3,2,2,3], 3)).toBe(2)
    })
})