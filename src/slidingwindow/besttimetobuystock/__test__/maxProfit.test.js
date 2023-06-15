import maxProfit from "../maxProfit";

// begin test
describe("maxProfit",()=>{
    it('Should return the best time to buy and sell stock.',()=>{
        expect(maxProfit([7,1,5,3,6,4])).toStrictEqual(5)
    })
})
describe("maxProfit",()=>{
    it('Should return the best time to buy and sell stock.',()=>{
        expect(maxProfit([7,6,4,3,1])).toStrictEqual(0)
    })
})