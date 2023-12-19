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
 * @return {boolean}
 */
// min for left subtree is -Infinity
// max for right subtree is Infinity
export default function isValidTree(root, min, max) {
   if(root === null) return true;
   if(root.val <= min || root.val >= max) return false;
   return isValidTree(root.left, min, root.val) && isValidTree(root.right, root.val, max);
};