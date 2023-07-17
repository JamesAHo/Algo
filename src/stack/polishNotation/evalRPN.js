/**
 * @param {string[]} tokens
 * @return {number}
 */

export function evalRPN (tokens) {
    let stack = [];
    for(let c in tokens) {
        if(c == "+"){
            stack.push(stack.pop() + stack.pop())
        }else if(c == "-"){
            stack.push(stack.pop() - stack.pop())
        }else if(c == "*"){
            stack.push(stack.pop() * stack.pop())
        }else if(c == "/"){
            stack.push(parseInt(stack.pop() / stack.pop()))
        }else{
            stack.push(parseInt(parseInt(tokens[c])))
        }
    }
    return stack[0]
}