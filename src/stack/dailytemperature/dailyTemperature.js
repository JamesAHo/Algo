/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
export default function dailyTemperature(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }

    return answer;
}