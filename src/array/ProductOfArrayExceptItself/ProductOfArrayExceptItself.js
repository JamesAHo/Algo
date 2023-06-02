/**
 * @param {number[]} nums
 * @return {number[]}
 */

// this is the solution that creating two prefix and suffix
// sample input nums = [1,2,3,4]
// the first index of the array is a special case because it doesn't count in the product,
// prefix * suffix => product of all left elements * product of all right elements
// This problem can be solved in linear time and space complexity 
export default function ProductOfArrayExceptItself(nums){
    // first is to iterate and create an array of prefixes
        // since there are no values on the left so the first element in the array should be 1.
    const prefix = [];
    for(let i = 0; i < nums.length; i++){
        // if index at 0, then start with index 1 since there are no values to the left
        if(i === 0) {
            prefix[i] = 1
        } else {
            // else, multiply nums[i-1]* prefix[i]
            prefix[i] = nums[i-1] * prefix[i-1]
        }
    }

    // second is to iterate and create an array of suffixes
    // since there are no values on the right so the first element in the array should be 1.
    const suffix = [];

    // start at the end of the array
    for (let i = nums.length - 1; i >= 0; i--){
        // in this case, the last index also have no values to the right
        if(i === nums.length - 1){
            suffix[i] = 1
        } else {
            // else, nums[i+1] * suffix[i+1]
            suffix[i] = nums[i+1] * suffix[i+1]
        }
    }
    // since the position of the prefixes and suffixes are defined, the result should be prefix * suffix

    const result = [];
    for(let i = 0; i < nums.length; i++){
        result[i] = prefix[i] * suffix[i]
    }
    return result;
}
