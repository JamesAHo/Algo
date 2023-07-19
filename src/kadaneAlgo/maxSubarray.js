/**
 *  * @param {number[]} nums
 *   * @return {number}
 **/
// using kadane algo to find the maxium sum
export default function maxSubarray(nums){
    // initialize var left, right
    // identify currSum and maxSum because of Kadane algorithm Math.max(currSum, maxSum);

    let left = 0;
    let right = 0;
    let currSum = nums[0];
    let maxSum = 0;

    while(right < nums.length){
        currSum =+ nums[right];
        maxSum = Math.max(maxSum,currSum);
        // handle a case if sum is negative
        if(currSum < 0){
            currSum = 0;
            left++
        }
        right++
    }
    return maxSum;
}
