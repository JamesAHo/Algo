import totalFruit from "../fruitbasket";

//begin test
describe('Given the integer array fruits, return the maximum number of fruits you can pick.', () => {
    it('Should return 3 as output becase We can pick from all 3 trees.', () => {
        expect(totalFruit([1,2,1])).toBe(3)
    })
    
})