import generateParenthesis from "../generateParenthesis";
// begin test
let n = 3
describe("generate parenthesis", () =>{
    it("should write a function to generate all combinations of well-formed parenthesis", () =>{
        expect(generateParenthesis(n)).toStrictEqual(["((()))","(()())","(())()","()(())","()()()"])
    })
})