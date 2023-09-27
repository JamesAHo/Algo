import validPalindrome2 from "../validPalindromeII";
// Begin test
const s = "abca"
describe("validPalindrome2", () => {
    it('Given a string s, return true if the s can be palindrome after deleting at most one character from it.', () => {
        expect(validPalindrome2(s)).toBe(true);   
    })
})
describe("validPalindrome2", () => {
    it('Given a string s, return true if the s can be palindrome after deleting at most one character from it.', () => {
        expect(validPalindrome2("abca")).toBe(true);   
    })
});
describe("validPalindrome2", () => {
    it('Given a string s, return true if the s can be palindrome after deleting at most one character from it.', () => {
        expect(validPalindrome2("abc")).toBe(false);   
    })
})
