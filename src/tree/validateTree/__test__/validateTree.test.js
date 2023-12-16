
// TreeNode.js
export class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// isValidTree.js
export default function isValidTree(root, min = -Infinity, max = Infinity) {
  if (root === null) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidTree(root.left, min, root.val) && isValidTree(root.right, root.val, max);
}

// isValidTree.test.js
import { TreeNode } from './TreeNode';
import isValidTree from './isValidTree';

describe('isValidTree', () => {
  // Test case 1: Valid BST
  test('returns true for a valid binary search tree', () => {
    const root = new TreeNode(
      2,
      new TreeNode(1),
      new TreeNode(3)
    );

    expect(isValidTree(root)).toBe(true);
  });

  // Test case 2: Invalid BST
  test('returns false for an invalid binary search tree', () => {
    const root = new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(4),
      new TreeNode(48)
    );

    expect(isValidTree(root)).toBe(false);
  });

  // Test case 3: Empty tree
  test('returns true for an empty tree', () => {
    const root = null;

    expect(isValidTree(root)).toBe(true);
  });

  // Add more test cases as needed

});
