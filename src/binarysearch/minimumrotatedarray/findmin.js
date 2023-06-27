/**
 * @param {number[]} nums
 * @return {number}
 */

// example:
    // nums = [0, 1, 2, 4, 5, 6, 7]

    //        left     mid       right
    // 5 is nums[mid] + 1

// identify left and right pointers
    // left = 0 and right = nums.length - 1
// Run a while loop from left to right
    // find mid = (left +right) / 2
    // case:1
        // if min number lies on the right half of the array
        // left = nums[mid] + 1
    // case: 2
        // if min number lies on the left half of the array
        // right = mid
// return the min number which nums[left]
export default function findmin(nums){
    let left = 0;
    let right = nums.length  - 1;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        nums[mid] >= nums[right] ? left = mid + 1 : right = mid
    }
    return nums[left];
   
}