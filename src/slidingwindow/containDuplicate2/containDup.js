/*Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k. */

// time complexity O(n)
// space complexity O(n)
export default function containDup(nums,k){
    const hashedMap = new Map();
    for(let i = 0; i < nums.length; i++){
        if(i - hashedMap.get(nums[i]) <= k){
            return true;
        }
        hashedMap.set(nums[i], i);
    }
    return false;
}