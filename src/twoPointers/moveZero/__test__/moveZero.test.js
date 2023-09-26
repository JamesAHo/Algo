import moveZero from "../moveZero";



// begin test
const nums = [0,1,0,3,12]
const nums2 = [0,2,2,0,12]
describe('Given an integer array nums, move all 0s  to the end of it while maintaining the relative order of the non-zero elements. ', () => {
    it('Should push all zeros at the end of the array', () => {
        expect(moveZero(nums)).toStrictEqual([1,3,12,0,0])
    })
} )
describe('Given an integer array nums, move all 0s  to the end of it while maintaining the relative order of the non-zero elements. ', () => {
    it('Should push all zeros at the end of the array', () => {
        expect(moveZero(nums2)).toStrictEqual([2,2,12,0,0])
    })
} )