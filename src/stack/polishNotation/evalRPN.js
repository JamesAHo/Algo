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
            let a = stack.pop();
            let b = stack.pop()
            stack.push(b - a)
        }else if(tokens[c] == "*"){
            stack.push(stack.pop() * stack.pop())
        }else if(tokens[c] == "/"){
            let a = stack.pop();
            let b = stack.pop()
            stack.push(parseInt(b/a))
        }else{
            stack.push(parseInt(parseInt(tokens[c])))
        }
    }
    return stack[0];
}