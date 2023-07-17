/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
export default function minSizeSubArrayLen(target, nums){
     let left = 0;
     let right = 0;
     let minLength  = Infinity;
     let sum = 0;


     while(right < nums.length){
        // add the next number to sum
        sum += nums[right];
        //  if sum >= target return the minimum length
        // valid window
        if(sum >= target){
            // update the minLenth
            minLength = Math.min(minLength,right - left + 1);
            // shift left and remove the left most value from sum sum = sum - nums[left]
            sum -= nums[left]
            left++
        }
        right++
     }
     return minLength === Infinity ? 0 : minLength;
}