import characterReplacement from "../characterReplacement";
// begin test

describe('the longest repeating character replacement', () => {
    it('Should return character replacement', () => {
        expect(characterReplacement("AABABBA",1)).toStrictEqual(4)
    })
    
})