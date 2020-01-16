var game_active = false;
var active_player = 0;
var player = [];
player[1] = "red";
player[2] = "blue";
var gameboard = [];
var player_color;

function beginGame() {
    document.getElementById('game_info').innerHTML = '<br>';

    if (game_active == true) return false;
    game_active = true;
    for (row = 0; row <= 5; row++) {
        gameboard[row] = [];
        for (col = 0; col <= 6; col++) {
            gameboard[row][col] = 0;
        }
    }

    UpdateBoard();
    active_player = 1;
    setUpTurn();
}



function UpdateBoard() {
    checkForWin(); //check to see if any player has won.
    for (col = 0; col <= 6; col++) {
        for (row = 0; row <= 5; row++) {
            document.getElementById('square_' + row + '_' + col).innerHTML = "<span class='piece player" + gameboard[row][col] + "'> </span>";
        }
    }
}

function checkForWin() {

    //check left-to-right
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 3; col++) {
            for (row = 0; row <= 5; row++) {

                if (gameboard[row][col] == i) {
                    if ((gameboard[row][col + 1] == i) && (gameboard[row][col + 2] == i) && (gameboard[row][col + 3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }

    //check top-to-bottom
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 6; col++) {
            for (row = 0; row <= 2; row++) {

                if (gameboard[row][col] == i) {
                    if ((gameboard[row + 1][col] == i) && (gameboard[row + 2][col] == i) && (gameboard[row + 3][col] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }

    //check diagnol down
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 3; col++) {
            for (row = 0; row <= 2; row++) {
                if (gameboard[row][col] == i) {
                    if ((gameboard[row + 1][col + 1] == i) && (gameboard[row + 2][col + 2] == i) && (gameboard[row + 3][col + 3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }

    //check diagnol up
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 3; col++) {
            for (row = 3; row <= 5; row++) {
                if (gameboard[row][col] == i) {
                    if ((gameboard[row - 1][col + 1] == i) && (gameboard[row - 2][col + 2] == i) && (gameboard[row - 3][col + 3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
}


function endGame(winningPlayer) {
    game_active = false;
    document.getElementById('game_info').innerHTML = "Winnaar is: speler " + winningPlayer;
}

/* active player*/
function setUpTurn() {
    if (game_active) {
        document.getElementById('game_info').innerHTML = "Current Player: Player " + active_player + " <span class='player" + active_player + "'>(" + player_color[active_player] + ")</span>";
    }
}


function drop(col) {
    for (row = 5; row >= 0; row--) {
        if (gameboard[row][col] == 0) {
            gameboard[row][col] = active_player;
            UpdateBoard();
            if (active_player == 1) {
                active_player = 2;
            } else {
                active_player = 1;
            }

            setUpTurn();
            return true;
        }
    }
}