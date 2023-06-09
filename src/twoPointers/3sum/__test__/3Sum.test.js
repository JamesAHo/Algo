import ThreeSum from "../3Sum";

// begin test
describe('ThreeSum', () => {
    it('should return numbers that sum = 0', () => {
        expect(ThreeSum([-1,0,1,2,-1,-4])).toStrictEqual([[[-1,-1,2],[-1,0,1]]])
    })
})