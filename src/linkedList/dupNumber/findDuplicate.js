/**
 * @param {number[]} nums
 * @return {number}
 */

/*Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space. */
export default function findDuplicate(nums) {
    // begin 
    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Detect the intersection point of the two pointers
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Phase 2: Find the entrance to the cycle
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    // The entrance to the cycle is the repeated element
    return slow;
}