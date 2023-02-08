const playerText =document.getElementById("playerText");
const restatBtn=document.getElementById("restartBtn");
let boxes =Array.from(document.getElementsByClassName("box"));


const winningIndicator =getComputedStyle(document.body).getPropertyValue("--winning-blocks")
const CircleText ="O";
const XTest = "X";
let currentPlayer= XTest;

let spaces =Array(9).fill(null);



const startGame =()=>{
    boxes.forEach(box=>box.addEventListener("click", boxClicked))
}

function boxClicked(e){
    const id =e.target.id

    if(!spaces[id]){
        spaces[id]=currentPlayer;
        e.target.innerText =currentPlayer;

        if(playerWon()!==false){
           playerText.innerHTML =`${currentPlayer} has won` 
           let winningLine =playerWon();

         winningLine.map(box =>boxes[box].style.backgroundColor=winningIndicator)
         return
        }
        else{
            playerText.innerHTML =  `${currentPlayer}  is draw`
        }

        currentPlayer = currentPlayer == XTest ? CircleText: XTest
        
        
        
    }
}

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerWon(){
for (const item of winningCombinations) {
    let   [a, b, c] = item
    
    if(spaces[a] && (spaces[a]==spaces[b]) &&(spaces[a]==spaces[c])){
        return [a, b, c];
    }  
}
return false
}
restatBtn.addEventListener("click", restart);

function restart(){
    spaces.fill(null);

    boxes.forEach(box=>{
        box.innerText ="";
        box.style.backgroundColor=''
    })

    playerText =" Tic Tac Toe"
    currentPlayer =XTest
}
startGame()
startGame()