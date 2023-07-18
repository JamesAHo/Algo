/**
 *  * @param {number[]} nums
 *   * @param {number} target
 *    * @return {number}
 **/
export default function search(nums,target){
	// created left and right variables
	let l = 0;
	let r = 0;
	while(l <= r){
		const mid = Math.floor((l + r) / 2);
		// left portion of the array
		if(nums[l] <= nums[mid]){
			if(target > nums[mid] || target > nums[l]){
				l = mid + 1;
			}else{
				r = mid - 1;
			}
		// right portion of the array
		}else{
			if(target < nums[mid] || target > nums[l]){
				r = mid - 1;
			}else{
				l = mid + 1;
			}
		}


	}
	return -1;

}

