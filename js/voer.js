var game_active = false;
var active_player = 0;
var player = [];
player[1] = "red";
player[2] = "blue";
var gameboard = [];
var colomns = [];
var player_color;

let levels = ['Kies modus ', '4 op een rij', '5 op een rij'];
let level = '';
let selectContainer = document.getElementById('selectElement');
let selectElement = document.createElement('select');
selectElement.addEventListener("change", myScript);
for (let x = 0; x < levels.length; x++) {
    let optionElement = document.createElement('option');

    optionElement.value = levels[x];
    optionElement.innerText = levels[x];
    selectElement.appendChild(optionElement);
}
selectContainer.appendChild(selectElement);


function myScript() {
    let gameTable = document.getElementById('game_table');
    gameTable.innerHTML = "";

    level = '';
    level = this.value;


    let tr;
    switch (level) {
        case '4 op een rij':


            for (var col = 0; col <= 5; col++) {

                tr = document.createElement('tr');
                gameTable.appendChild(tr);
                //  document.writeln("<tr>");
                for (var row = 0; row <= 6; row++) {
                    //document.writeln("<td id='square_" + col + "_" + row + "' class='board_square'></td>");
                    let td;
                    td = document.createElement('td');
                    td.setAttribute("class", "board_square");
                    td.setAttribute("id", "square_" + col + "_" + row + "");
                    tr.appendChild(td);
                }

                //  document.writeln("</tr>");
            }
            break;
        case '5 op een rij':


            for (var col = 0; col <= 7; col++) {
                tr = document.createElement('tr');
                gameTable.appendChild(tr);
                for (var row = 0; row <= 8; row++) {
                    let td;
                    td = document.createElement('td');
                    td.setAttribute("class", "board_square");
                    td.setAttribute("id", "square_" + col + "_" + row + "");
                    tr.appendChild(td);
                }
            }
            break;
    }

}
let ended = false;

function beginGame() {
    ended = false;
    document.getElementById('game_info').innerHTML = '<br>';
    switch (level) {
        case '4 op een rij':
            if (game_active) return false;
            game_active = true;
            for (row = 0; row <= 5; row++) {
                gameboard[row] = [];
                for (col = 0; col <= 6; col++) {
                    gameboard[row][col] = 0;
                }
            }
            break;
        case '5 op een rij':
            if (game_active) return false;
            game_active = true;
            for (row = 0; row <= 7; row++) {
                gameboard[row] = [];
                for (col = 0; col <= 8; col++) {
                    gameboard[row][col] = 0;
                }
            }
            break;
    }
    DirectClick();
    UpdateBoard();
    active_player = 1;
    setUpTurn();
}



function UpdateBoard() {
    checkForWin(); //check to see if any player has won.
    switch (level) {
        case '4 op een rij':

            for (col = 0; col <= 6; col++) {
                for (row = 0; row <= 5; row++) {
                    document.getElementById('square_' + row + '_' + col).innerHTML = "<span class='piece player" + gameboard[row][col] + "'> </span>";
                }
            }
            break;
        case '5 op een rij':
            for (col = 0; col <= 8; col++) {
                for (row = 0; row <= 7; row++) {
                    document.getElementById('square_' + row + '_' + col).innerHTML = "<span class='piece player" + gameboard[row][col] + "'> </span>";
                }
            }
            break;
    }
}

function checkForWin() {
    switch (level) {
        case '4 op een rij':
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
            break;
        case '5 op een rij':
            for (i = 1; i <= 2; i++) {
                for (col = 0; col <= 4; col++) {
                    for (row = 0; row <= 7; row++) {

                        if (gameboard[row][col] == i) {
                            if ((gameboard[row][col + 1] == i) && (gameboard[row][col + 2] == i) && (gameboard[row][col + 3] == i) && (gameboard[row][col + 4] == i)) {
                                endGame(i);
                                return true;
                            }
                        }
                    }
                }
            }
            //check top-to-bottom
            for (i = 1; i <= 2; i++) {
                for (col = 0; col <= 8; col++) {
                    for (row = 0; row <= 3; row++) {

                        if (gameboard[row][col] == i) {
                            if ((gameboard[row + 1][col] == i) && (gameboard[row + 2][col] == i) && (gameboard[row + 3][col] == i) && (gameboard[row + 4][col] == i)) {
                                endGame(i);
                                return true;
                            }
                        }
                    }
                }
            }
            //check diagnol down
            for (i = 1; i <= 2; i++) {
                for (col = 0; col <= 4; col++) {
                    for (row = 0; row <= 3; row++) {
                        if (gameboard[row][col] == i) {
                            if ((gameboard[row + 1][col + 1] == i) && (gameboard[row + 2][col + 2] == i) && (gameboard[row + 3][col + 3] == i) && (gameboard[row + 4][col + 4] == i)) {
                                endGame(i);
                                return true;
                            }
                        }
                    }
                }
            }
            //check diagnol up
            for (i = 1; i <= 2; i++) {
                for (col = 0; col <= 5; col++) {
                    for (row = 4; row <= 7; row++) {
                        if (gameboard[row][col] == i) {
                            if ((gameboard[row - 1][col + 1] == i) && (gameboard[row - 2][col + 2] == i) && (gameboard[row - 3][col + 3] == i) && (gameboard[row - 4][col + 4] == i)) {
                                endGame(i);
                                return true;
                            }
                        }
                    }
                }
            }
            break;
    }
}


function endGame(winningPlayer) {
    ended = true;
    let winnerPoints = localStorage.getItem("player" + winningPlayer);
    if (winnerPoints >= 1) {
        console.log(winnerPoints);

        localStorage["player" + winningPlayer] = parseInt(winnerPoints) + 1;
    } else {
        localStorage.setItem("player" + winningPlayer, 1);
    }


    winnerPoints + 1;
    let winTimes = 1;
    game_active = false;
    document.getElementById('game_info').innerHTML = "Winnaar is: speler " + winningPlayer;
    let PLayerScour = document.getElementById('scour').innerHTML = 'player 1 score is: ' + localStorage.getItem('player1');
    PLayerScour = document.getElementById('scour2').innerHTML = 'player 2 score is: ' + localStorage.getItem('player2');
}


/* active player*/
function setUpTurn() {
    if (game_active) {
        document.getElementById('game_info').innerHTML = "Current Player: Player " + active_player + " <span class='player" + active_player + "'>(" + player_color[active_player] + ")</span>";
    }
}


function drop(col) {
    switch (level) {
        case '4 op een rij':
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
            break;
        case '5 op een rij':
            for (row = 7; row >= 0; row--) {
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
            break;
    }
}

function DirectClick() {
    switch (level) {
        case '4 op een rij':
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < 6; j++) {
                    //  console.log(document.getElementById("square_" + j + "_" + i));
                    document.getElementById("square_" + j + "_" + i).onclick = function() {
                        if (ended) {
                            alert('start opnieuw');
                        } else {
                            drop(i);
                        }

                    }
                }
            }
            break;
        case '5 op een rij':
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 8; j++) {
                    //     console.log(document.getElementById("square_" + j + "_" + i));
                    document.getElementById("square_" + j + "_" + i).onclick = function() {
                        if (ended) {
                            alert('start opnieuw');
                        } else {
                            drop(i);
                        }
                    }
                }
            }
            break;
    }
}






// let playerPoints = {name:'mazn' , score: 0};