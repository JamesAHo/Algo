/**
 * @param {number[]} fruits
 * @return {number}
 */

export default function totalFruit(fruits){
    let left = 0;
    let right = 0;
    let basket = new Map();
    let ans = 0
    while(right < fruits.length){
        basket.set(fruits[right],(fruits[right] || 0) + 1);
        
        // valid window condition
        while(basket.size > 2){
            const leftFruit = fruits[left];
            const count = basket.get(leftFruit);
            if(count === 0){
                basket.delete(leftFruit)
            }else{
                basket.set(leftFruit, count -1)
            }
            left++
        }
        right++
        ans = Math.max(ans,right - left)
    }
    return ans
}