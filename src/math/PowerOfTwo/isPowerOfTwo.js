/** 
 * @param {number} number
 * @return {boolean}
 */

export default function isPowerOfTwo(number){
    // if number is < 1 return false
    if(number < 1) return false;
    // do while loop to scan number that > 1
    while(number !== 1){
        if(number % 2 !== 0){
            return false;
        }
        number /= 2
    }
    //  otherwise return true
    return true
}