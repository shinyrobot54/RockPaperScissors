/**
 *  @author Meyerson, Gabe (gabemeyerson@gmail.com)
 *  @version 0.0.3
 *  @summary Not sure
 *  @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let userInput, computerInput, winner;
const ROCK = 1, PAPER = 2, SCISSORS = 3, COMPUTER = 7, USER = 8, TIE = 9;

function main() {
    setComputerInput();
    setUserInput();
    setWinner();
    printResults();
    setContinueResponse();
}

function setContinueResponse(){
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 1 && continueResponse !== 0){
            continueResponse = Number(PROMPT.question('\n Would you like to continue? [Yes = 1 No = 0]\n'));
        }
    } else {
        continueResponse = 1
    }
}

function setComputerInput(){
    const MAXNUM = 3;
    computerInput = Number(Math.floor(Math.random * MAXNUM) + 1);
}

function setUserInput() {
    const MININPUT = 1, MAXINPUT = 3;
    userInput = PROMPT.question('\n Please enter a value 1-3 [1 = Rock, 2 = Paper, 3 = Scissors');
   while (userInput < MININPUT || userInput > MAXINPUT){
        userInput = PROMPT.question('\n You have entered an invalid response, please try again');
    }
}

function setWinner() {
    const
    if (userInput == ROCK && computerInput == PAPER){
        winner = COMPUTER;
    }else if (userInput ==  PAPER && computerInput == SCISSORS){
        winner = COMPUTER;
    }else if (userInput == SCISSORS && computerInput == ROCK){
        winner = COMPUTER;
    }else if(userInput == computerInput){
        winner = TIE;
    }else{
        winner = USER;
    }
}

function printResults(){
    if (winner = COMPUTER){
        console.log('\n The Computer has won!');
    }else if (winner = USER){
        console.log('\n You have won!');
    }else{
        console.log{'\n It was a tie!'};
    }
}