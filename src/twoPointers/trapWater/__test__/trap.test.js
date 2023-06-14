import trap from "../trap";
// begin test

describe('trap', () => {
    it('should return 6', () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toStrictEqual(6);
    })
})