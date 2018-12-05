/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastRoll;

init();

// Roll Dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // Random number between 1 and 6
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    
        // Display dice
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";
        
        document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
        document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
    
        // Update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            // If two sixes in a row, reset score
            if (lastRoll === 6 && (dice1 === 6 || dice2 === 6)) {
                scores[activePlayer] = 0;
                document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
                
                nextPlayer();
            } else {
                
                // Track if 6 is rolled
                if (dice1 === 6 || dice2 === 6) {
                    lastRoll = 6
                
                // Reset lastRoll
                } else {
                    lastRoll = 0;
                }

                roundScore += (dice1 + dice2);
                document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + roundScore + '</em>'; 
            }
        // If a 1 is rolled, next player
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add current score to GLOBAL score
        scores[activePlayer] += roundScore;
    
        // Change value during the game
        var input = document.querySelector(".final-score").value;
        var winningScore;

        // 0, undefined, null or "" are COERCED to false
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Update UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";
            document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // Turnery operator
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    lastRoll = -1;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.getElementById("dice-1").style.display = "none";
    // document.getElementById("dice-2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener('click', init)

function init() {
    scores = [0, 0];
    activePlayer = roundScore = 0;
    gamePlaying = true;

    // Load page, hide dice and reset scores
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
}