/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// nums = [-1,0,1,2,-1,-4]

// array needed to be sorted for two pointers method
// Loop through the triple Array
    // Solve the first test case where if nums[i] = 0 || nums[i] === nums[i - 1] -- SKIP
    // declare left and right where left = i + 1 and right = nums.length - 1
    // While loop
        // if the sum = 0 return [i,j,k]
        // Second test case is if nums[left] === nums[left + 1] left++
        // Third test case is if nums[right] === nums[right - 1] right--
        // left++
        // right++
    // else if sum < 0 then left++
    // else sum > 0 then right--

export default function threeSum(nums){
    const result = [];
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        // two sum pattern
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]]);
                // Skip duplicate values of nums[left]
                while(left < right && nums[left] === nums[left + 1]){
                    left++;
                }
                // Skip duplicate values of nums[left]
                left++;
                while(left < right && nums[right] === nums[right - 1]){
                    right--;
                }
                // move pointers
                right--;
            } else if(sum < 0){
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}