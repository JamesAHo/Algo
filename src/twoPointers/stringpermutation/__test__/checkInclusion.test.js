 import checkInclusion from "../checkInclusion";
// Begin test 
describe('The strings if permutated', () => {
    it('Should return true of string is permutated', () => {
        expect(checkInclusion("ab","eidbaooo")).toBe(true);
    })
    
})
describe('The strings if permutated', () => {
    it('Should return true of string is permutated', () => {
        expect(checkInclusion("hello","ooolleoooleh")).toBe(true);
    })
    
})