# Fruit Basket Problem

## Problem Description

You have a row of trees, where each tree bears a type of fruit. You are given an array `fruits`, where `fruits[i]` represents the type of fruit on the i-th tree. You can start at any tree, and you want to collect as many fruits as possible while following these rules:

1. You must collect exactly two types of fruits.
2. The collected fruits must be consecutive trees (i.e., they should appear in a contiguous sequence).
3. Once you have started, you can't skip any tree. You must continue picking fruit from consecutive trees until you reach a tree with a different type of fruit.

Write a function `totalFruit(fruits)` to find the maximum number of fruits you can collect.

## Approach
To solve this problem, we can use a sliding window approach. We will maintain a window with at most two distinct types of fruits. We will use a HashMap to keep track of the counts of each type of fruit in the window.

We iterate through the array using two pointers, left and right. The right pointer moves forward to expand the window and add the fruit to the HashMap. If the window contains more than two types of fruits, we move the left pointer to shrink the window, while ensuring that we maintain a valid window with at most two distinct types of fruits.

During this process, we keep track of the maximum count of fruits we can collect. Once we have processed the entire array, we return the maximum count as the result.

## Time Complexity
The time complexity of this solution is O(n), where n is the number of elements in the 'fruits' array. The reason is that we iterate through the array once using the two-pointer technique.

## Space Complexity
The space complexity of this solution is O(1) since we only use a fixed-size HashMap to keep track of the fruit counts, and the number of distinct types of fruits in the window is at most two. Therefore, the space used by the HashMap does not depend on the input size.

## Example

```javascript
totalFruit([1, 2, 1, 3, 4, 3, 5, 1, 2]); // Output: 4




