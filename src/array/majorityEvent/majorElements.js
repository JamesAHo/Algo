/**
 * @param {number[]} nums
 * @return {number}
 */
export default function majorityEle(nums) {
      // Initialize the candidate and count
      let candidate = nums[0];
      let count = 1;
  
      // Voting phase
      for (let i = 1; i < nums.length; i++) {
          if (count === 0) {
              candidate = nums[i];
              count = 1;
          } else if (candidate === nums[i]) {
              count++;
          } else {
              count--;
          }
      }
  
      // Verification phase
      count = 0;
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] === candidate) {
              count++;
          }
      }
  
      // Check if the candidate is the majority element
      if (count > Math.floor(nums.length / 2)) {
          return candidate;
      } else {
          // This case should not occur as the problem assumes a majority element always exists
          return null;
      }
};