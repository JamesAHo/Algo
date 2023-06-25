import findmin from "../findmin";

// beign test
let nums = [3,4,5,1,2]
describe("findmin", () =>{
    it("should return the num number in rotated array", () =>{
        expect(findmin(nums)).toStrictEqual(1)
    })
});