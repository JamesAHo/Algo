import minEatingSpeed from "../minEatingSpeed";

// begin test
describe("The minimum integer k such that she can eat all the bananas within h hours", () => {
    it("Should return the minimum number of bananas Koko eat within h hours", () => {
        expect(minEatingSpeed([3,6,7,11],8)).toEqual(4)
    })
})