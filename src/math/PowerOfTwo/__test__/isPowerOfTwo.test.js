import isPowerOfTwo from '../isPowerOfTwo';

// begin test
describe('sPowerOfTwo', () => {
    it('Should calculate if the number can divide itself', () => {
        expect(isPowerOfTwo(-1)).toBe(false);
        expect(isPowerOfTwo(4)).toBe(true);
        expect(isPowerOfTwo(5)).toBe(false);
        expect(isPowerOfTwo(8)).toBe(true);
        expect(isPowerOfTwo(64)).toBe(true);
        expect(isPowerOfTwo(1111)).toBe(false);

    }) 
})