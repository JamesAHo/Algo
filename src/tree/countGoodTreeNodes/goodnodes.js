/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


export default function goodNodes(root){
	let count = 0;
	function dfs(nodes,maxNodes){
	if(!nodes) return;
	if(nodes.val > maxNodes){
		count++;
		maxNodes = nodes.val
	}
	dfs(nodes.left,maxNodes)
	dfs(nodes.right,maxNodes)

}
	dfs(root,root.val)
	return count;

}
