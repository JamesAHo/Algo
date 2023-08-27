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
                count++
            }
        }
    }


    return count;
}



