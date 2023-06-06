import ValidPalindrome from "../ValidPalindrome";

// begin test
describe('if string is palindrome', () => {
    it('Should return a boolean if string is palindrome', () => {
        expect(ValidPalindrome("A man, a plan, a canal: Panama")).toBe(true)
    })
    
})