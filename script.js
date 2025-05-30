function getComputerChoice(max){
            let random_no = Math.floor(Math.random() * max);
            if (random_no === 0){
                return "Rock";
            }
            else if (random_no === 1){
                return "Paper";
            }
            else{
                return "Scissors";
            }
        }
        //get player choice by taking input from button clicked by player
        let choice = '';
        let compChoice = '';

        let hChoice = document.querySelector('#hChoice');
        let cChoice = document.querySelector('#cChoice');

        let humanScore = 0;
        let computerScore = 0;
        let round = 0;

        let score = document.querySelector('#score');
        let result = document.querySelector('#result');

        let rbtn = document.querySelector('.rbtn');
        rbtn.addEventListener('click', (e) => {
            choice = rbtn.textContent;
            compChoice = getComputerChoice(3);
            //print player and computer choice in the div assigned for choice selection as follows for all three buttons.
            hChoice.textContent = `Your choice is ${choice}`;
            cChoice.textContent = `The Computers' choice is ${compChoice}`;
            if(round < 5){
                playRound(choice, compChoice);
                round ++;
                score.textContent = `Your score: ${humanScore} Computer: ${computerScore}`;
            } 
            if(round === 5){
                endGame();
                showResult();
            }
        });

        let pbtn = document.querySelector('.pbtn');
        pbtn.addEventListener('click', (e) => {
            choice = pbtn.textContent;
            compChoice = getComputerChoice(3);
            hChoice.textContent = `Your choice is ${choice}`;
            cChoice.textContent = `The Computers' choice is ${compChoice}`;
            if(round < 5){
                playRound(choice, compChoice);
                round ++;
                score.textContent = `Your score: ${humanScore} Computer: ${computerScore}`;
            } 
            if(round === 5){
                endGame();
                showResult();
            }
        });

        let sbtn = document.querySelector('.sbtn');
        sbtn.addEventListener('click', (e) => {
            choice = sbtn.textContent;
            compChoice = getComputerChoice(3);
            hChoice.textContent = `Your choice is ${choice}`;
            cChoice.textContent = `The Computers choice is ${compChoice}`;
            //call playRound function for five rounds
            if(round < 5){
                playRound(choice, compChoice);
                round ++;
                score.textContent = `Your score: ${humanScore} Computer: ${computerScore}`;
            } 
            if(round === 5){
                endGame();
                showResult();
            }
        });

            function playRound(humanChoice, computerChoice){
            if(humanChoice === computerChoice){ 
            } else if((humanChoice === "Rock" && computerChoice === "Scissors")||(humanChoice === "Paper" && computerChoice === "Rock")||(humanChoice === "Scissors" && computerChoice === "Paper")){
                ++humanScore;
            } else {
                ++computerScore;
            }
        }

        function showResult(){
            if (humanScore === computerScore){
                result.textContent = 'This game is tied!';
            } else if (humanScore > computerScore){
                result.textContent = 'Congratulations! You Won!';
            } else {
                result.textContent = 'Sorry, You Lost!';
            }
        }

        function endGame(){
            rbtn.disabled = true;
            pbtn.disabled = true;
            sbtn.disabled = true;
        }

        let replay = document.querySelector('#replay');
        replay.addEventListener('click', (e) => {
            location.reload();
        });