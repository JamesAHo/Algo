import kthSmallest from "../kthsmallest";


// Mock tree node constructor for simplicity
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

describe('kthSmallest', () => {
    test('returns the kth smallest element in a BST', () => {
        // Example BST:    3
        //                / \
        //               1   4
        //                \
        //                 2
        const root = new TreeNode(3);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.left.right = new TreeNode(2);

        expect(kthSmallest(root, 1)).toBe(1);
        expect(kthSmallest(root, 2)).toBe(2);
        expect(kthSmallest(root, 3)).toBe(3);
        expect(kthSmallest(root, 4)).toBe(4);
    });

    test('handles empty tree', () => {
        expect(kthSmallest(null, 1)).toBe(null);
    });

    // Add more test cases as needed
});
