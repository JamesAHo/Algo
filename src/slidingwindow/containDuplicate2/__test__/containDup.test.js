import containDup from "../containDup"
import containDup2 from "../containDup";
// begin test
let nums =[1,2,3,1];
let k = 3;
describe("maxProfit",()=>{
    it('Should return the best time to buy and sell stock.',()=>{
        expect(containDup(nums, k)).toEqual(true);
    })
})
describe("maxProfit",()=>{
    it('Should return the best time to buy and sell stock.',()=>{
        expect(containDup2(nums, k)).toEqual(true);
    })
})