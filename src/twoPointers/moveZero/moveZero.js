// Given an integer array nums, move all zero to the end of it while maintaining the relative order of the non-zero

export default function moveZero(nums){
    // use fast and slow two pointers
    let left = 0;
    let right = 0;
    while(right < nums.length){
        if(nums[right] !== 0){
            [nums[left],nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
}