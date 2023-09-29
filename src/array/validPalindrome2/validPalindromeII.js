/**
 * @param {string} s
 * @return {boolean}
 
 */
// helper function
const isValidPalindrome = (s, left, right) => {
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right++;
    }
    return true;
}
export default function validPalindrome2(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        if(s[left] !== s[right]){
            if(isValidPalindrome(s, left + 1, right)){
                return true;
            }
            if(isValidPalindrome(s, left, right - 1)){
                return true;
            }
            return false;
        }
        left++;
        right--;
    }
    return true;
};