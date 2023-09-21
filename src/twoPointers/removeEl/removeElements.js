// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
export default function removeElements(nums,val){
    // using two pointers approach
    let l = 0;
    let r = nums.length -1;
    while(l <= r){
        if(nums[l] === val){
            nums[l] = nums[r];
            // decrease right
            r--
        }else{
            l++
        }
    }
    return l;
}