import longestConsecutive from "../longestConsecutive.test";

// begin test

describe('longestConsecutive', () => {
    it('Should count the longest consecutive count',() => {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
    })
})