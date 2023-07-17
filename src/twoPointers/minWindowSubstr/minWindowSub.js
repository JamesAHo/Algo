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
    let have = 0;
    let need= 0;

    for(let char of s ){
        countS[char] = countS.set(char, (countS.get(char) || 0)  + 1);
    }
    console.log(countS)
}