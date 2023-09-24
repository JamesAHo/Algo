import moveZero from "../moveZero";



// begin test
const numbers = [0,1,0,3,12]
const target = 9
describe('Given an integer array nums, move all 0s  to the end of it while maintaining the relative order of the non-zero elements. ', () => {
    it('Should push all zeros at the end of the array', () => {
        expect(moveZero(numbers)).toBe([1,3,12,0,0])
    })
} )