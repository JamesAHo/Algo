/**
 * @param {character[][]} grid
 * @return {number}
 */
//Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

export default function numberIsland(grid){
    let visited = new Set();
    let count = 0
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length;c++){
            // traverse through the grid with cow col and visited nodes
            if(traverse(grid,r,c,visited) === true){
                count++;
            }
        }
    }


    return count;
}


export default function traverse(grid,r,c,visited){
    // check if row is in bound
    const validRow = 0 <= r && r < grid.length;
    const validCol = 0 <= c && c < grid[0].length;
    if(!validRow || validCol) return false;
    // if node is at 0 return false;
    if(grid[r][c] === '0') return false;
    // current positions
    const pos = r + ',' + c;
    // add visted note to the set
    visited.add(pos);
    // traverse to all neighbor nodes
    traverse(gird,r-1, c, visited);
    traverse(gird,r+1, c, visited);
    traverse(gird,r, c + 1, visited);
    traverse(gird,r, c - 1, visited);
    return true;
    
}
