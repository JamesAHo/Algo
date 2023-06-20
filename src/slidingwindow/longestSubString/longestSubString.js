// 3. Longest Substring Without Repeating Characters
// Pseudocode 
// Using left pointer, sliding window and hash map 
// create a new set
// let left = 0 and maxSize = 0
// Loop over the array
    // run a test case for duplicate characters
        // if characters already exist in the hash map delete the leftmost character
        // increament the left pointer by one
// otherwise add character to hash map
// then find maxSize by using Math.max(maxSize, i - left + 1)
export default function longestSubString(s){
    let set = new Set();
    let left = 0;
    let maxSize = 0;
    for(let i = 0; i < s.length;i++){

        // run the test case
        while(set.has(s[i])){
            set.delete(s[left]);
            left++
        }
        // otherwise add character to hash map
        set.add(s[i]);
        // then find maxSize
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}