// 3. Longest Substring Without Repeating Characters
// Pseudocode 
// Using left pointer, sliding window and hash map 
// create a new set to keep track of the characters 
// let left = 0 and maxSize = 0
// Loop over the array
    // run a test case for duplicate characters
        // if characters already exist in the hash map delete the leftmost character
        // increament the left pointer by one
// otherwise add character to hash map
// then find maxSize by using Math.max(maxSize, i - left + 1)
// time complexity O(N) and space O(1)
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
// alternative implementation
// Using two pointers and sliding window
    // let left = 0, right = 0, maxLength = 0, seen = newSet();
    // Initialize two pointers, 'start' and 'end,' both pointing to the first character of the string.
    // Initialize a variable 'maxLen' to 0, which will store the length of the longest substring found so far.
    // Initialize an empty set called 'seen' to keep track of the characters seen in the current substring.
    // Iterate through the string while the 'end' pointer is within the bounds of the string:
        // a. Check if the character at the 'end' pointer is already in the 'seen' set.
        // - If it is not in the set, add the character to the 'seen' set and move the 'end' pointer to the next character.
        // - If it is in the set, it means we have encountered a repeating character. Remove the character at the 'start' pointer from the 'seen' set and move the 'start' pointer one step forward.
        // Calculate the length of the current substring by subtracting 'start' from 'end' and store it in 'maxLen' if it is greater than the current 'maxLen'.
    // Once the iteration is complete, return 'maxLen' as the length of the longest substring without repeating characters.
// this solution take up more memory compared to the last solution
export default function longestSubString2(s){
    let start = 0;
  let end = 0;
  let maxLen = 0;
  let seen = new Set();

  while (end < s.length) {
    if (!seen.has(s[end])) {
      seen.add(s[end]);
      end++;
      maxLen = Math.max(maxLen, end - start);
    } else {
      seen.delete(s[start]);
      start++;
    }
  }

  return maxLen;
}