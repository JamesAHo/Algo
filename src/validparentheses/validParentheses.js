// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
/**
 * @param {string} s
 * @return {boolean}
 */
//Identify if string is valid by these test cases:
	// open brackets must be closed by the same type of brackets
	// Open brackets must be closed in the correct order.
	// Every close bracket ahs a correctponding open bracket of the same type.
// Using stack method to store the valid string
// open brackets including openBrackets = ["(","{","["]; 
// close brackets including openBrackets = ["(","{","["];
export default function isValid(s){
	let openBracket = ["(","{","["];
	let closeBracket = ["(","{","["];
	let stack = [];
	for(let i = 0; i < s.length;i++){
		if(s[i].includes[openBracket]){
			stack.push(s[i])	
		}else{
			
	}		
}	

};
