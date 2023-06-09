import threeSum from "../3Sum";

// begin test
describe('threeSum', () => {
    it('should return numbers that sum = 0', () => {
        expect(threeSum([-1,0,1,2,-1,-4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
    })
})