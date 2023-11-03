import dailyTemperature from "../dailyTemperature";

// begin test
let temperature = [73,74,75,71,69,72,76,73]
describe("If there is no future day for which this is possible, keep answer[i] == 0 instead.", () =>{
    it(", return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.", () =>{
        expect(dailyTemperature(temperature)).toStrictEqual([1,1,4,2,1,1,0,0]);
    })
})