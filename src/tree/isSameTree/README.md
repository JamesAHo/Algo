# isSametree Function Description

## Description
The `isSametree` function is designed to determine if two binary trees, represented by their root nodes `p` and `q`, are identical or not. In other words, it checks whether the structure and values of both trees are the same.

## Parameters
`p`: The root node of the first binary tree. <br>
`q`: The root node of the second binary tree.

## Algorithm
1. If both p and q are null, it means that both trees are empty and therefore are considered identical. Return true.
2. If only one of the trees, either p or q, is null, it means they have different structures, and thus, they are not 
3. identical. Return false.
4. Compare the values of the root nodes p.val and q.val. If they are not equal, the trees cannot be identical. Return false.
5. Recursively call the isSametree function for the left subtrees (p.left and q.left). If the left subtrees are not identical, return false.
6. Recursively call the isSametree function for the right subtrees (p.right and q.right). If the right subtrees are not identical, return false.
7. If all the previous checks pass, it means both trees are identical. Return true.

## Function Signature
```javascript
function isSametree(p, q)
const tree1 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

const tree2 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

console.log(isSametree(tree1, tree2)); // Output: true


