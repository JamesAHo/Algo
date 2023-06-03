// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
/**
 * @param {character[][]} board
 * @return {boolean}
 */

export default function ValidSudoku(board) {
    // create a new  set
    const set = new Set()
    // iterate through the row and col'
    for(let i = 0; i < 9; i++){
        // iterate col
        for(let j = 0; j < 9; j++){
            const value = board[i][j]
            if(value != '.'){
                if(!set.add(`${value} at row ${i}`) || !set.add(`${value} at col ${j}`) ||
                set.add(`${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`)
                ){
                    return false
                }
            }
        }
    }
    return true;
}
