class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export default function treeIncludes(root, target){
    const queue = [ root ];
    while(queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.val);
        
        if(current.left) queue.push(currentNode.left);
        if(current.right) queue.push(currentNode.left);
    }
}