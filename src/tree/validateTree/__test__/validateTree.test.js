import isValidTree from "../validDateTree";
describe('isValidTree', () => {
    // Test case 1: Valid BST
    test('returns true for a valid binary search tree', () => {
      const root = {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      };
  
      expect(isValidTree(root, -Infinity, Infinity)).toBe(true);
    });
  
    // Test case 2: Invalid BST
    test('returns false for an invalid binary search tree', () => {
      const root = {
        val: 5,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      };
  
      expect(isValidTree(root, -Infinity, Infinity)).toBe(false);
    });
  
    // Test case 3: Empty tree
    test('returns true for an empty tree', () => {
      const root = null;
  
      expect(isValidTree(root, -Infinity, Infinity)).toBe(true);
    });
  
    // Add more test cases as needed
  
  });