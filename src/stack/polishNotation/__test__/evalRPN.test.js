import evalRPN from "../evalRPN"

// begin test
describe("Evaluate Reverse Polish Notation", () =>{
    it("should return output 9", () =>{
        expect(evalRPN(["2","1","+","3","*"])).toStrictEqual(9)
    })
})

describe("Evaluate Reverse Polish Notation", () =>{
    it("should return output 9", () =>{
        expect(evalRPN(["4","13","5","/","+"])).toStrictEqual(6)
    })
})