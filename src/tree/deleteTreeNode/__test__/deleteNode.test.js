import deleteNode from '../deleteNode';
// Mock binary tree node structure for the test
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe('deleteNode', () => {
  test('deletes a node correctly', () => {
    // Create the binary search tree for testing
    const root = new TreeNode(5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(6, null, new TreeNode(7))
    );

    // Choose a node to delete
    const keyToDelete = 3;

    // Call the deleteNode function
    const newRoot = deleteNode(root, keyToDelete);

    // Assertions
    expect(newRoot.val).toBe(5); // Check root value
    expect(newRoot.left.val).toBe(4); // Check left subtree
    expect(newRoot.right.val).toBe(6); // Check right subtree
    expect(newRoot.left.left.val).toBe(2); // Check left subtree of the left subtree
    expect(newRoot.left.right).toBe(null); // Check right subtree of the left subtree
    expect(newRoot.right.left).toBe(null); // Check left subtree of the right subtree
    expect(newRoot.right.right.val).toBe(7); // Check right subtree of the right subtree
  });

  // Add more test cases as needed
});
