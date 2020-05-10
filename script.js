 /*
We store our game status element here to allow us to more easily 
use it later on 
*/
 
 const statusDisplay = document.querySelector('.game--status')

 /* Here we declare some variables that we wil;l use to tract the 
    ggame state through the game 
  */

/*
We will use gameActive to pause the game in case of an end scenario

*/

let gameActive = true;
/*
We will store our current player here, so we know who's turn 
*/

let currentPlayer = "X";

 /* we will store our current game state here, the form of empty strings in an array 
 will allow us to easily tract played cells and validate the game state later on 
 */  
 
  let gameState = ["", "", "", "", "", "", "", "", ""];
   
  /*   Here wew have declared some messages we will display to the user during the game.
       since we have some dynamic factors in those messages, name the current player, 
       we have declared them as functions, so that the actual message gets created with 
       current data every time we need it.
  */ 
     const winninMessage = () => `player ${currentPlayer} has won`;
     const drawMessage = () => `Game ended in a draw`;
     const currentPlayerTurn = () => `it's ${currentPlayer}'s turn`;

     /*we set the initial message to let the players know whose turn it is  */

     statusDisplay.innerHTML = currentPlayerTurn(); 
        function handleCellPlyed(clickedCell, clickCellIndex){
            /* we update our internal game state to reflect the played move,
               as well  as update the user interface top reflect the played move
             */
                gameState[clickCellIndex] = currentPlayer;
                clickedCell.innerHTML = currentPlayer;

        } 

         function handlePlayerChange(){ 
             currentPlayer = currentPlayer === "X" ? "O" : "X";
             statusDisplay.innerHTML = currentPlayerTurn(); 

         }

            const winningCondition = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ];

          function handleResultValidation(){
                let roundWon = false; 
                    for (let i= 0; i<=7; i++){
                        const winningCondition =  winningCondition[i];
                        let a = gameState[winningCondition[0]];
                        let b = gameState[winningCondition[1]];
                        let c = gameState[winningCondition[2]];
                        if (a ==='' || b === '' || c === '' ){
                            continue; 
                        }   
                        if (a === b && b=== c)  {
                            roundWon = true; 
                            break 
                        }
                    } 
                     if(roundWon) {
                         statusDisplay.innerHTML = winninMessage(); 
                         gameActive = false; 
                         return;
                     }

                     /* we will check weather there are any values in our game state array 
                     that are still not populated with player sign
                      */ 

                       let roundWon = !gameState.includes("");
                       if(roundDraw) {
                           statusDisplay.innerHTML = drawMessage(); 
                           gameActive = false; 
                           return; 
                       }
                       /* IF we get to here we know that the no one won game yet,
                          and that there are still moves to be played, so we continue 
                          by changing the current player
                           */ 

                    handlePlayerChange();

          } 

          function handleCellClick(clickedCellEvent){
              /*
            We will save the clicked html element in a variable for easier further use
            */ 
              const clickedCell = clickedCellEvent.target; 
                const clickCellIndex = parseInt(
                    clickedCell.getAttribute('data-cell-index')
                ); 
                /* 
                Next up we need to check whether the call has already been played, 
                or if the game is paused. If either of those is true we will simply ignore the click.
                */

                if(gameState[clickCellIndex] !=="" || !gameActive){
                    return; 
                    /* 
                    if everything is in order we will proceed with the game flow 
                    */
                } 

                handleCellPlayed(clickedCell, clickCellIndex);
                handleRestartValidation();
 



          }
          function handleRestartGame(){ 
              gameActive = true; 
              currentPlayer = "X";
              gameState = ["", "", "", "", "", "", "", "", ""];
              statusDisplay.innerHTML = currentPlayerTurn();

              document.querySelector('.cell')
                        forEach(cell => cell.innerHTML = "");

          } 

          /* And finally we add our event listener to the actual game cell, as our 
          restart button 
          */ 

           document.querySelectorAll('cell').forEach(cell => cell.addEventListener('click', handleCellClick));
           document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
      

       