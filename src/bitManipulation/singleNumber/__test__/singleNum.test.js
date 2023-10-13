import singleNumber from "../singleNum";
import singleNumber2 from "../singleNum";
let nums = [2,2,1];
describe("The bit manipulation method",()=>{
    it('return a non-duplicate number',()=>{
        expect(singleNumber(nums)).toStrictEqual(1); //
    })
})
