import evalRPN from "../evalRPN";

// begin test
let token = ["2","1","+","3","*"];
describe("trings tokens that represents an arithmetic expression in a Reverse Polish Notation.", () =>{
    it("Return an integer that represents the value of the expression.", () =>{
        expect(evalRPN(token)).toBe(9)
    })
})