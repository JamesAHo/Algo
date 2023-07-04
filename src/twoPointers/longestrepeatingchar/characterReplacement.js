/**
 @param {string}
 @param {number}
 @return {number}
 */

// Pesuedocode
// Keep track of the characters count
// 
export default function characterReplacement(s,k){
	let freqCount = {}
	let left = 0;
	let right =0;
	let longest = 0;
	let maxFreq = 0;

	// work to the right
	while(right < s.length){
		// frequency count the characters
		const rightChar = s.charAt(right);
		freqCount[rightChar] = freqCount[rightChar] + 1 || 1;

		// find the maxFreq
		maxFreq = Math.max(maxFreq,freqCount[rightChar]);
		// work on the valid window
		while((right - left + 1) - maxFreq > k) {
			const leftChar = s.charAt(left)
			freqCount[leftChar] -= 1
			left++;
		}

		longest = Math.max(longest, right - left + 1);
		right++
	}
	return longest;
}
