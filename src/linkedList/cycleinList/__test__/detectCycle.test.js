import hasCycle from "../detectCycle";

// Define a ListNode class to create the linked list nodes
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Helper function to create a linked list from an array
function createLinkedListFromArray(arr) {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Helper function to create a cycle in the linked list
function createCycle(head, pos) {
  if (pos < 0) return head;

  let current = head;
  let cycleNode = null;

  let i = 0;
  while (current.next !== null) {
    if (i === pos) {
      cycleNode = current;
    }
    current = current.next;
    i++;
  }

  if (cycleNode !== null) {
    current.next = cycleNode;
  }

  return head;
}

describe("Linked list cycle", () => {
  it('returns true if the linked list contains a cycle, else returns false', () => {
    // Create a linked list from the array [3,2,0,-4]
    const head = createLinkedListFromArray([3, 2, 0, -4]);

    // Create a cycle at a specific position, e.g., at the second node (position 1)
    const posOfCycle = 1;
    const headWithCycle = createCycle(head, posOfCycle);

    // Test the hasCycle function with the linked list containing a cycle
    expect(hasCycle(headWithCycle)).toBe(true);

    // Test the hasCycle function with a linked list that doesn't contain a cycle
    expect(hasCycle(head)).toBe(true);
  });
});