// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
/**
 * @param {string} s
 * @return {boolean}
 */
const alphaNumOnly = (string) => {
    const alphaNum = string.replace(/[^a-z0-9]/gi, '');
    return alphaNum.toLowerCase();
}
export default function ValidPalindrome(s){
    let string = alphaNumOnly(s)
    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if(string[i] !== string[j]) {
          return false;
        }
      }
      return true;
}
