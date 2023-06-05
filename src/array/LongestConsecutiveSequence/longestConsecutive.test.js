// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Input: nums = [100,4,200,1,3,2] 
// Output: 4
// Explaination 


// the least consecutive as base case is 1
// using Dynamic Programing with the time complexity is O(N^2)

// Approach
// We can use DP to save the value 
export default function longestConsecutive(nums){
    // Using set to store nums value
    let set = new Set(nums)
    let longestCount = 0
    for(let num of nums){
        // Initialize the number to count streak
        if(!set.has(num -1)){
            let currentNum = num
            let currentCount = 1;
        while(set.has(currentNum + 1)){
            currentNum++
            currentCount++
        }
        // update the current count
        longestCount = Math.max(longestCount,currentCount)
        }
    }
    return longestCount;
}