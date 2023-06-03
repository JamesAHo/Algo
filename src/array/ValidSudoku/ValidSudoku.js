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
    let set = new Set()
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const value = board[i][j]

            if (value !== ".") {
                const row = `${value} at row ${i}`
                const column = `${value} at column ${j}`
                const box = `${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`
                console.log(`${box}`)
                if (set.has(row) || set.has(column) || set.has(box)) {
                    return false
                } else {
                    set.add(row)
                    set.add(column)
                    set.add(box)
                }
            }
        }
    }

    return true
}
