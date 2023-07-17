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
        sum += nums[right];
        //  if sum >= target return the minimum length
        if(sum >= target){
            minLength = Math.min(minLength,right - left + 1);
            sum -= nums[left]
            left++
        }
        right++
     }
     return minLength === Infinity ? 0 : minLength;
}