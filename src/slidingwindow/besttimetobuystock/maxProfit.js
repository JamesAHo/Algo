// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0

/**
 * @param {number[]} prices
 * @return {number}
 */
// prices = [7,1,5,3,6,4]
// pseudo code:
// some of the algorithm is related to Kadane's Algorithm
// solve edge cases where if no profit return 0
    // first case is if(prices.length < 1) return 0 or maxProfit should be 0.
// Using two pointers to identify left and right
    // since buying on day 2 and sell on day 1 is not allowed because we must buy stock first before sell
    // thus left = buy =  0
    // right = sell = 1
    // maxProfit = 0
// while loop through the array starting at sell position
    // compare the price left and right
        // if price[left] < price[right] then profit = price[right] - price[left];
            // find the max(maxProfit,profit)
        // else replace left with right left = right because we want to buy at the lowest price
    // move right++
// return maxProfit
    
export default function(prices){

}