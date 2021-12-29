
const boxes = document.getElementsByClassName("box");
const turnFor = document.querySelector('.info');
const boxText = document.getElementsByClassName('boxText');
const reset = document.getElementById('reset');
let gameOver = false;

let turn = 'X';
const changeTurn = function() {
    return turn === 'X' ? '0' : 'X';
}


const checkWinner = function() {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]
    wins.forEach(function(e){
       if((boxText[e[0]].innerText === boxText[e[1]].innerText) && 
       (boxText[e[2]].innerText === boxText[e[1]].innerText) && 
       (boxText[e[0]].innerText !== '')) {
           document.querySelector('.info').innerText = boxText[e[0]].innerText + "Won";
            gameOver = true;
        };
    });
};

Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click', function(){
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWinner();
            if (!gameOver){
                document.getElementsByClassName("info")[0].innerText = 'Turn for ' + turn;
            }
        }
    });
});

reset.addEventListener('click', function(){
    Array.from(boxText).forEach(element => {
        element.innerText = '';
    });
    turn = 'X';
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = 'Turn for ' + turn;
});

 