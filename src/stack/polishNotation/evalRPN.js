/**
 * @param {string[]} tokens
 * @return {number}
 */

export default function evalRPN(tokens) {
    let stack = [];
    for(let c in tokens) {
        if(tokens[c] == "+"){
            stack.push(stack.pop() + stack.pop())
        }else if(tokens[c] == "-"){
            stack.push(stack.pop() - stack.pop())
        }else if(tokens[c] == "*"){
            stack.push(stack.pop() * stack.pop())
        }else if(tokens[c] == "/"){
            stack.push(parseInt(stack.pop() / stack.pop()))
        }else{
            stack.push(parseInt(parseInt(tokens[c])))
        }
    }
    return stack[0];
}