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

}