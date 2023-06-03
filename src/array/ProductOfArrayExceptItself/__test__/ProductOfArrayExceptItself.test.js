import ProductOfArrayExceptItself from "../ProductOfArrayExceptItself";

// begin test
describe('ProductOfArrayExceptItself', () => {
    it('The result should be product of array except itself', () => {
        expect(ProductOfArrayExceptItself([1,2,3,4])).toStrictEqual([24,12,8,6]);
        // expect(ProductOfArrayExceptItself([-1,1,0,-3,3])).toStrictEqual([0,0,9,0,0]);
        
    })
})