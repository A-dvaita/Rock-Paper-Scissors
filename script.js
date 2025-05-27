function getComputerChoice(max){
            let random_no = Math.floor(Math.random() * max);
            if (random_no === 0){
                console.log(("The computers choice is Rock"));
                return "Rock";
            }
            else if (random_no === 1){
                console.log(("The computers choice is Paper"));
                return "Paper";
            }
            else{
                console.log(("The computers choice is Scissors"));
                return "Scissors";
            }
        }
        //get player choice by taking input from button clicked by player
        let rbtn = document.querySelector('.rbtn');
        rbtn.addEventListener('click', (e) => {
            let choice = rbtn.textContent;
            console.log("Your choice is " + choice);
            return choice;
        });

        let pbtn = document.querySelector('.pbtn');
        pbtn.addEventListener('click', (e) => {
            let choice = pbtn.textContent;
            console.log("Your choice is " + choice);
            return choice;
        });

        let sbtn = document.querySelector('.sbtn');
        sbtn.addEventListener('click', (e) => {
            let choice = sbtn.textContent;
            console.log("Your choice is " + choice);
            return choice;
        });

        // let humanChoice ='';
        // let choices = document.querySelector('#choices');
        // choices.addEventListener('click', (e) => {
        //     let btn = document.querySelectorAll('.btn');
            
        //     if (btn.textContent = 'Rock'){
        //         humanChoice = 'Rock';
        //     }

        //     if(btn.textContent = 'Paper'){
        //         humanChoice = 'Paper';
        //     }

        //     if(btn.textContent = 'Scissors'){
        //         humanChoice = 'Scissors';
        //     }
        // });

        // console.log(`humanChoice`);

        function getHumanChoice(){
            // let input = prompt("Enter you choice: Rock | Paper | Scissors");
            let choice = capitalise(input);
            console.log("Your choice is " + choice);
            return choice;
        }

        // function capitalise(string){
        //     if (!string) return string;
        //     return string[0].toUpperCase() + string.slice(1).toLowerCase();
        // }

        // let humanScore = 0;
        // let computerScore = 0;

        // function playGame(){
        //     let humanSelection = getHumanChoice();
        //     let computerSelection = getComputerChoice(3);
        //     function playRound(humanChoice, computerChoice){
        //     if(humanChoice === computerChoice){
        //         console.log("This round is a tie!");
        //         console.log("Your score: " + humanScore + " Computers score: " + computerScore);
        //     } else if((humanChoice === "Rock" && computerChoice === "Scissors")||(humanChoice === "Paper" && computerChoice === "Rock")||(humanChoice === "Scissors" && computerChoice === "Paper")){
        //         console.log("You win!");
        //         ++humanScore;
        //         console.log("Your score: " + humanScore + " Computers score: " + computerScore);
        //     } else {
        //         console.log("You lose!");
        //         ++computerScore;
        //         console.log("Your score: " + humanScore + " Computers score: " + computerScore);
        //     }
        // }
        // playRound(humanSelection, computerSelection);
        // }
        // for(let i = 0; i<5; i++){
        //     playGame();
        // }