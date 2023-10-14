/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  */
export default function groupAnagram(strs){
    if(strs.length == 0) return [[" "]];
    let hashMap = new Map();
    let sortedWord = strs.split('').sort().join(" ");
    for(let word of strs){
        if(!hashMap.has(sortedWord)){
            hashMap.set(sortedWord, [word]);
        }else{
            hashMap.get(sortedWord).push(word);
        }
    }
    return Array.from(hashMap.values());
}