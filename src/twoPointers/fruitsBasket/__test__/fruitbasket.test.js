import totalFruit from "../fruitbasket";

//begin test
describe('Given the integer array fruits, return the maximum number of fruits you can pick.', () => {
    it('Should return 3 as output becase We can pick from all 3 trees.', () => {
        expect(totalFruit([1,2,1])).toBe(3)
    })
    
})
describe('Given the integer array fruits, return the maximum number of fruits you can pick.', () => {
    it('Should return 4 as output becase We can pick from all 4 trees.', () => {
        expect(totalFruit([1, 2, 1, 3, 4, 3, 5, 1, 2])).toBe(4)
    })
    
});
describe('Given the integer array fruits, return the maximum number of fruits you can pick.', () => {
    it('Should return 4 as output becase We can pick from all 4 trees.', () => {
        expect(totalFruit([5,2,4,7,5,7,5])).toBe(3)
    })
    
})