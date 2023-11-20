import majorityEle from "../majorElements";

// begin test

describe('return the majority element', () => {
    it('should return the majority elements', () => {
        expect(majorityEle([1,2,3,2,2,2,5,4,2])).toBe(2);
        
    })
})
describe('return the majority element', () => {
    it('Should return 7', () => {
        expect(majorityEle([7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5,7,7,7,7,7,7,7,7])).toBe(7);
        
    })
})
describe('return the majority element', () => {
    it('Should return 3', () => {
        expect(majorityEle([3,2,3])).toBe(3);
        
    })
})
