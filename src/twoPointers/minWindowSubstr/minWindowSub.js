/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

export default function minWindow(s, t) {
    let countT = new Map();
    let countS = new Map();
    let right = 0;
    let left = 0;
    let minStart = 0;
    let minLength = Infinity;
    let count = 0;

   
    for(let char of t ){
        countS[char] = countS.set(char, (countS.get(char) || 0)  + 1);
    }
    while(right < s.length){

    }
}