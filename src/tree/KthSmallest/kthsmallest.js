/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = [];
    if(root === null) return null;
    function traverse(node){
        if(node === null) return;
        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return res[k-1];
};