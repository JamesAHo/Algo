/**
 * @param {number[]} nums
 * @return {number}
 */
/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space. */
export default function singleNumber(nums){
    // Brute force approach
    // loop through the first loop of i 
        // loop through the second loop of j = i + 1
            // if nums[i] == nums[j] then count++
        // if count == 1
            // return nums[i]
            // for (let i = 0; i < nums.length; i++) {
            //     let count = 0;
            //     for (let j = 0; j < nums.length; j++) {
            //         if (nums[i] === nums[j]) {
            //             count++;
            //         }
            //     }
            //     if (count === 1) {
            //         return nums[i];
            //     }
            // }
            let xor = 0;
            for(let i = 0; i < nums.length; i++) {
                xor ^= nums[i];
            }
            return xor;
    }
   