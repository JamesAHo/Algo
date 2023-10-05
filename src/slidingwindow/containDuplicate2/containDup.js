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
// using sliding window methods
export default function containDup2(nums,k){
    const numIndices = new Map();  // Map to store the indices of numbers

    for (let left = 0, right = 0; right < nums.length; right++) {
        const num = nums[right];

        // If the current element is already in the window,
        // and the absolute difference between indices is less than or equal to k, return true
        if (numIndices.has(num) && right - numIndices.get(num) <= k) {
            return true;
        }

        // Otherwise, update the index of the current element in the map
        numIndices.set(num, right);

        // If the size of the window exceeds k, move the left pointer to the right
        if (right - left >= k) {
            numIndices.delete(nums[left]);
            left++;
        }
    }

    // If no such pair of indices is found, return false
    return false;

}