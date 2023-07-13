/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

export default function checkInclusion(s1, s2) {
    let s1Count = new Map()
    let s2Count = new Map()
    //  Count s1
    for(let char of s1) {
        s1Count.set(char, (s1Count.get(char) || 0) + 1);
    }
    // starting sliding window
    let left = 0;
    let right = 0;
    let count = 0;
    while(right < s2.length){
        // expand the window
        const char = s2[right];
        // If the character is present in s1Map, we update s2Map to track its frequency count in the current window. If the frequency count of the character in s2Map is less than or equal to the frequency count of the character in s1Map, we decrement count since we have found a match for that character.
        if(s1Count.has(char)){
            s2Count.set(char, (s2Count[char] || 0) + 1);
            // check if the frequency count of char in s2Count is less than or the equal to the freq count of chat in s1Count
            if(s2Count.get(char) <= s1Count.get(char)){
                count++ // increment count 
            }
        }
        // Shrink the window
        if(right - left + 1 >= s1.length){
           if(count === s1.length) {
            return true
           }
           const leftChar = s2[left];
           if(s1Count.has(leftChar)){
                if(s2Count.get(leftChar) <= s1Count.get(leftChar)){
                    count--;
                }
            s2Count.set(leftChar, s2Count.get(leftChar) - 1);
           }
        
            left++
        }
        // if count = 0, permutation is true
        right++
    }
    return false;
    }