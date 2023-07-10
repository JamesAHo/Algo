/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

export default function checkInclusion(s1, s2) {
    let s1Count = new Map()
    let s2Count = new Map()
    //  iterate over s1 and update s1Map to store the frequency count of each character in s1.
    for(let char of s1) {
        s1Count.set(char, (s1Count.get(char) || 0) + 1);
    }
    // starting sliding window
    let left = 0;
    let right = 0;
    // count = s1 length because s1 need to matched in the slidiong window s2.
    // In order to find a permutation of s1 and s2, we need to match all the characters fro s1 exactly.
    let count = s1.length;
    while(right < s2.length){
        // expand the window
        const char = s2[right];
        // If the character is present in s1Map, we update s2Map to track its frequency count in the current window. If the frequency count of the character in s2Map is less than or equal to the frequency count of the character in s1Map, we decrement count since we have found a match for that character.
        if(s1Count.has(char)){
            s2Count.set(char, (s2Count[char] || 0) + 1);
            // if s1Count has char in S2, decrase the count--
            if(s1Count.get(char) <= s2Count.get(char)){
                //  decrement count since we have found a match for that character.
                count--
            }
        }
        // If the size of the window (right - left + 1) becomes larger than s1.length, we need to shrink the window.
        if(right - left + 1 > s1.length){
            const leftChar  = s2[left];
            if(s1Count.has(leftChar)){
               if(s2Count.get(leftChar) === s1Count.get(leftChar)){
                count++;
               }
               s2Map.set(leftChar, s2Count.get(leftChar) - 1);
            }
            left++
        }
        // if count = 0, permutation is true
        if(count === 0){
            return true;
        }
        right++
    }
    return false;
    }