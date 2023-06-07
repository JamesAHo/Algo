import TwoSum from "../2sum";

// begin test
const numbers = [2,7,11,15];
const target = 9
describe('TwoSum', () => {
    it('Should return sum value that equal to target', () => {
        expect(TwoSum(numbers,target)).toStrictEqual([1,2])
    })
} )