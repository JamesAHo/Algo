/**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
 
 
 
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export default function isSametree(p,q){
    // if p and w are null, return true
    if(!p && !q) return true;
    // if neither p or q is null return false because tree is not the same
    if(!p || !q) return false;
    // if values from both trees are not the same, return false
    if(p.val !== q.val) return false;

    // recursively check left and right of the roots
    if(!isSametree(root.left,q.left)) return false;
    if(!isSametree(root.right,q.right)) return false;
    // otherwise return true
    return true;
}



