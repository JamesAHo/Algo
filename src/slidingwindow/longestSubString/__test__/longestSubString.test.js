import longestSubString from "../longestSubString";
// begin test
describe("longestSubString", () =>{
    it("should return the longest substring", () =>{
        expect(longestSubString("abcabcbb")).toBe(3)
    })
})