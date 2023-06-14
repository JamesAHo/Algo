/**
 * @param {number[]} height
 * @return {number}
 */
// Identify left and right
    // if left start at 0, then the water can not be trapped thus left should start at n[1];
    // if left start at height -1, the water also can not be trapped this right should start at n[height.length - 2]
// Identify maxLeft and maxRight
    // maxleft is positioned at 0
    // maxRight is positioned at height - 1
// Two Pointer Approach so Time Complexity should be O(N) and S.C is O(1);
    // Run a while loop from left to right
    // Inside while loop check the conditions that make water trapped
        // while left < right
            // If maxLeft < maxRight
                    //if the current height[left] is > maxLeft
                        // then maxLeft = current height[left]
                    // else
                        // water = maxLeft - current height[left]
                    // increast left++
            // else
                    // if the current height[right] is > maxRight
                        // then maxRight = current height[right]
                    // else
                        // water = maxRight - current height[right]
                    // decrease right--


export default function trap(height){
    // edge case if the array is <= 2 return 0
    let n = height.length;
    if(n.length <= 2) return 0;
    let left = 1, right = n - 2;
    let maxleft = height[0], maxright = height[n - 1]
    let result = 0;
    while(left <= right){
        if(maxleft < maxright){
            if(height[left] > maxleft){
                maxleft = height[left]
            }else{
                result += maxleft - height[left]
            }
            left++
        }else{
            if(height[right] > maxright){
                maxright = height[right]
            }else{
                result += maxright - height[right]
            }
            right--
        }
    }
    return result;

}