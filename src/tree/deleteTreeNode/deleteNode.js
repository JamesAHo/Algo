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
 * @param {number} key
 * @return {TreeNode}
 */

/**
 * 
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST
 */
export default function deleteNode(root, key) {
    if(root === null) return null;
    if(root.val === key){
        if(root.left === null && root.right === null) return null;
        if(root.left === null) return root.right;
        if(root.right === null) return root.left;
        let minNode = findMin(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
    }else if(root.val > key){
        root.left = deleteNode(root.left, key);
    }else{
        root.right = deleteNode(root.right, key);
    }
    return root;
}
// helper function to find the minimum node in a tree
function findMin(node){
    while(node.left !== null){
        node = node.left;
    }
    return node;
}