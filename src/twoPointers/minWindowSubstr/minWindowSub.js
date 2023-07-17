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

   // count character of t string
    for(let char of t ){
        countT[char] = countT.set(char, (countS.get(char) || 0)  + 1);
    }
    // sliding window 
    while(right < s.length){
        let rightChar = s[right];
        if(countT.has(rightChar)){
            countS.set(rightChar, (countT.get(rightChar) || 0) + 1);
            if(countS.get(rightChar) <= countT.get(rightChar)){
                count++;
            } 
        }
        // check if count  = t.length\
        // if it ise minLength = valid window
        // and min start = left
        while(count === t.length){
            const validWindow = right - left + 1;
            if(validWindow < minLength){
                minLength = validWindow;
                minStart = left;
            }

            const leftChar = s[left];
            if(countT.has(leftChar)){
                countS.set(leftChar, countS.get(leftChar)  - 1);
                if(countS.get(leftChar) < countT.get(leftChar)){
                    count--;
                }
            }
            left++
        }
        right++;
        if(minLength === Infinity) return ""
}
return s.substring(minStart, minStart  + minLength )
}