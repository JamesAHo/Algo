/**
 ** @param {number[]} piles
 ** @param {number} h
 ** @return {number}
 **/
export default function minEatingSpeed(piles,h){
	let l = 1;
    let r = Math.max(...piles);
    let res = r;
    while(l <= r){
        let k = Math.floor((l + r) / 2)
        let hours = 0;
        for(let p of piles){
            hours += Math.ceil(p / k);
        }
        if(hours <= h){
            res = Math.min(res, k)
            r = k - 1
        }else{
            l = k + 1
        }
    }
    return res
}
// Space Complexity O(1)
// Time Complexity O(Olog(N))
