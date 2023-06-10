// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Area = length * height
// length is the distance from j - i
// 
export default function maxArea(height){
    let area = 0;
    let left  = 0;
    let right = height.length  - 1;
    while(left < right){
        area = Math.max(area, Math.min(height[left],height[right]) *(right - left))
        if(height[left] <= height[right]){
            left++;
        }else{
            right--;
        }
    }
    return area;
}