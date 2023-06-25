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
// Examples
    // [{},(), (()]
    //  ---i
    // if open bracket are found, push closing bracket to stack;
        // else if stack.length > 0 || stack[stack.lengh - 1] === i
            // stack.pop
        // else return false
    // if stack.length === 0 this string is valid
export default function isValid(s){
    let stack = []
    for(let char of s){
        if(char == '('){
            stack.push(')');
        } else if(char == '{'){
            stack.push('}')
        } else if(char == '['){
            stack.push(']')
        } else if(stack.length === 0 || stack.pop() != char){
            return false
        }
    }
    return stack.length === 0
    }

    // let hashMap = { "(": ")","[": "]","{": "}"};
    // let stack = [];
    // for(let i of s){
    //     if(hashMap[i]){
    //         stack.push(hashMap[i]);
    //     }else if(stack.length > 0 && stack[stack.length - 1] === i){
    //         stack.pop()
    //     }else{
    //         return false;
    //     }
    // }
    // return stack.length === 0

