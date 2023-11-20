import majorityEle from "../majorElements";

// begin test

describe('return the majority element', () => {
    it('should return the majority elements', () => {
        expect(majorityEle([1,2,3,2,2,2,5,4,2])).toBe(2);
        
    })
})