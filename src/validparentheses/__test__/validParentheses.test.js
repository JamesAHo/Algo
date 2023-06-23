import isValid from "../../twoPointers/ValidPalindrome/ValidPalindrome";


// begin test
describe("isValid", () => {
    it("Should return if string contain valid parentheses", () => {
        expect(isValid("()")).toBe(true)
    })
});

describe("isValid", () => {
    it("Should return if string contain valid parentheses", () => {
        expect(isValid("()[]{}")).toBe(true)
    })
});

describe("isValid", () => {
    it("Should return if string contain valid parentheses", () => {
        expect(isValid("(]")).toBe(false);
    })
});



