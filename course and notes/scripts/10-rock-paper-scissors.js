  
        let score = JSON.parse (localStorage.getItem('score')) || {
          wins:0,
          losses : 0,
          ties: 0
        };

        updateScoreElement();

       
       /* if(!score){
          score = {
            wins:0,
            losses : 0,
            ties: 0
          };
        }
          */

        function playGame(playerMove){
          const computerMove = pickComputerMove();

          let result = '';
         
          if (playerMove === `scissors`){
            if (computerMove === `Rock`){
            result = `You Lose.`;
          } else if (computerMove === `paper`){
            result = `You Win.`;
          } else if (computerMove === `scissors`){
            result = `Tie.`;
          }
        } else if (playerMove === `paper`){
          if(computerMove === `Rock`){
            result = `You Win.`;
          } else if (computerMove === `paper`){
            result = `Tie.`;
          } else if (computerMove === `scissors`){
            result = `You Lose.`;
          }
        } else if (playerMove === `Rock`){
          if(computerMove === `Rock`){
          result = `Tie.`;
        } else if (computerMove === `paper`){
          result = `You Lose.`;
        } else if (computerMove === `scissors`){
          result = `You Win.`;
        }
        
        }

        if (result === `You Win.`){
          score.wins += 1;
        } else if (result === `You Lose.`){
          score.losses += 1;
        } else if (result === `Tie.`){
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify (score));

        updateScoreElement();

        document.querySelector('.js-result')
        .innerHTML = result;

        document.querySelector('.js-moves')
        .innerHTML = `You <img src="image/${playerMove}-emoji.png" class="move-button">
      <img src="image/${computerMove}-emoji.png" class="move-button">
      Computer`;

        
      }

        function updateScoreElement(){
          document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

        }

        function pickComputerMove() {
        const randomNumber = (Math.random());

        let computerMove = '';
        
        if(randomNumber >= 0 && randomNumber < 1/3){
          computerMove = `Rock`;
        } else if (randomNumber >= 1/3 && randomNumber < 2/3 ){
          computerMove = `paper`;
        } else if (randomNumber >= 2/3 && randomNumber < 1){
          computerMove = `scissors`;
        }

        return computerMove;
        }

        //return syntax rules
        // return (value) 