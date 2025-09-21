console.log('minesweeper')

const IMG_FLAG = `<img src="img/flag.png">`
const IMG_MINE = `<img src="img/mine.jpeg">`

const gLevel = {
    SIZE: 4,
    MINES: 2
}

const gGame = {
    isOn: false,
    revealedCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gBoard

// var gBoard = [
// [   {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false }
// ],
// [   {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false }],
// [
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false }
// ],
// [
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false },
//     {minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false }
// ]
// ]










function onInit() {
    console.log('hi')
    gBoard = buildBoard(gLevel.SIZE)
    console.log(gBoard)
    
    var elTdMines = document.querySelector('#mines')
    elTdMines.innerText = gLevel.MINES

    var elTdTimer = document.querySelector('#timer')
    elTdTimer.innerText = 0


    renderBoard()


}

function buildBoard(size) {
    var board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            board[i].push(createGameObject())
        }
    }
    board[1][3].isMine = true
    board[2][2].isMine = true



    return board
}

function createGameObject() {
    return { minesAroundCount: 4, isRevealed: false, isMine: false, isMarked: false }
}

function setMinesNegsCount() {

}

function renderBoard() {

    var elBody = document.querySelector('.body')
    var strHtml = ``

    for (var i = 0; i < gLevel.SIZE; i++) {
        strHtml += `<tr>`
        for (var j = 0; j < gLevel.SIZE; j++) {
            strHtml += `<td class="cell unrevealed" onclick="onCellClicked(this, event, ${i}, ${j})"> </td>`
        }
        strHtml += `</tr>`

    }
    elBody.innerHTML = strHtml
    console.log (elBody)

}

function onCellClicked(elCell, ev, i, j) {
    if (ev.ctrlKey) {
        markCell(elCell, i, j)
    }
    else {
        revealCell(elCell, i, j)
    }
}

function markCell(elCell, i, j) {
    console.log('marking')
    elCell.innerHTML = IMG_FLAG
    console.log(elCell)
}

function revealCell(elCell, i, j) {
        console.log('revealing')

}

function onCellMarked(elCell, i, j) {

}

function checkGameOver() {

}

function expandReveal(elCell, i, j) {

}