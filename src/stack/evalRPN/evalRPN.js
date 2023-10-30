// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

export default function evalRPN(tokens){
    // using stack
    // 1. Create an array called stack. This stack will be used to store opperands and perform calculations
    const stack = [];

    // 2. Iterate though each token in the tokens array usong for of loop
    for(const token of tokens){
        // 3. Check if the token is a number using the isNaN function. If it is a number, parse it as an interger using parseInt
        if(!isNaN(token)){
            stack.push(parseInt(token));
        }else{
            // else if it is an operator.
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            // using swtich case.
            switch(token){
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(Math.trunc(operand1/operand2)); // truncate division
                    break;
            }
        }
    }
    return stack[0];
}