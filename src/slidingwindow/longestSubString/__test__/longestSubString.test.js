import longestSubString from "../longestSubString";
// begin test
describe("longestSubString", () =>{
    it("should return the longest substring", () =>{
        expect(longestSubString("abcabcbb")).toBe(3)
    })
});
// test case when string is empty
describe("longestSubString", () =>{
    it("should return the longest substring", () =>{
        expect(longestSubString("")).toBe(0)
    })
})
// test case when string is 1
describe("longestSubString", () =>{
    it("should return the longest substring", () =>{
        expect(longestSubString("1")).toBe(1)
    })
})
describe("longestSubString", () =>{
    it("should return the longest substring", () =>{
        expect(longestSubString("pwwkew")).toBe(3)
    })
})
describe("longestSubString", () =>{
    it("should return the longest substring", () =>{
        expect(longestSubString("aaaaaaaa")).toBe(1)
    })
})