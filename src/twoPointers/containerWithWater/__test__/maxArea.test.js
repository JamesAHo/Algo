import maxArea from "../maxArea";
// Begin test
let height = [1,8,6,2,5,4,8,3,7];
describe('maxArea', () => {
    it('Should return max area', () => {
        expect(maxArea(height)).toBe(49)
    })
})