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
 
  let gameState = []; 
   
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
        function handleCellPlayed(){

        } 

         function handlePlayerChange(){

         }

          function handleResultValidation(){

          } 

          function handleCellClick(){

          }
          function handleRestartGame(){

          } 

          /* And finally we add our event listener to the actual game cell, as our 
          restart button 
          */ 

           document.querySelectorAll('cell').forEach(cell => cell.addEventListener('click', handleCellClick));
           document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
      

       