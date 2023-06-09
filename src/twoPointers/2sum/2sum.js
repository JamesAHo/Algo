// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export default function TwoSum(nums, target){
    // identify pointers
    let left = 0;
    let right = nums.length -1 
    while(left < right){
        let sum = nums[left] + nums[right]
        if(sum == target){
            return [left + 1, right + 1]
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
    return [];
}