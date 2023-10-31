import generateParenthesis from "../generateParenthesis";
// begin test
let n = 3
let n2 = 1
describe("generate parenthesis", () =>{
    it("should write a function to generate all combinations of well-formed parenthesis", () =>{
        expect(generateParenthesis(n)).toStrictEqual(["((()))","(()())","(())()","()(())","()()()"])
    })
})
describe("generate parenthesis", () =>{
    it("should return 1 set of ()", () =>{
        expect(generateParenthesis(n2)).toStrictEqual(["()"])
    })
})