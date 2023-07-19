/**
 *  * @param {number[]} nums
 *   * @param {number} target
 *    * @return {number}
 **/
export default function search(nums,target){
	let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[l] <= nums[mid]) {
            // Left half is sorted
			// if num left <= target and target is less than nums mid
			// right = mid - 1
			// then look the left
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            // Right half is sorted
			// if nums mid < target and target is less than num right
			// then look to the right 
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
	// return 1 if not found
    return -1;
}

