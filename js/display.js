function display(game) {
    displayPlayer(game.currentPlayer);
    displayButtonRoll(verifyCanRoll(game.currentPlayer, game.manche, game.currentScore));
    displayDices(game.hand);
    displayButtonAnother(game.hand, verifyNextBrasse(game.currentPlayer, game.manche, game.hand));
    displayScore(game.currentPlayer, game.manche, game.currentScore);
}

function displayInfo(info) {
    $("#info").empty();
    $("#info").append(info);
}

function displayPlayer(player) {
    $("#playerName").empty();
    $("#playerName").append(player.name);
}

function displayWinner(player) {
    displayPlayer(player.name + " WON !!");
}

function displayScore(player, manche, score) {
    $("#scorePlayer").empty();
    $("#scorePlayer").append(player.score);
    $("#score").empty();
    $("#score").append(score+" ("+manche.score+")");
}

function displayButtonRoll(roll) {
    if (roll) {
        $("#roll").removeAttr("disabled");
    } else {
        $("#roll").attr("disabled", "true");
    }
}

function displayButtonAnother(hand, another) {
    $(".dice#turn").hide();
    if (hand.getSelected().dices.length == 6 && another) {
        $(".dice#turn").show();
    }
}

function displayDices(hand) {
    var i;
    for (i = 0; i < hand.dices.length; i++) {
        $(".dice#" + i).empty();
        $(".dice#" + i).append(hand.dices[i].face);
        if (hand.dices[i].selected) {
            $(".dice#" + i).append(" *");
        }

        if (hand.dices[i].face == 0) {
            $(".dice#" + i).attr("disabled", "true");
        } else {
            $(".dice#" + i).removeAttr("disabled");
        }
    }
}

function initTable(players) {
    var i;
    $("table.score thead tr").empty();
    $("table.score thead tr").append("<th>Turn</th>");
    for (i = 0; i < players.length; i++) {
        $("table.score thead tr").append("<th>" + players[i].name + "</th>");
    }

    $("table.score tbody").empty();
    tableNewLine(1, players);
}

function tableNewLine(tour, players) {
    var lineData = "";
    for (i = 0; i < players.length; i++) {
        lineData += "<td class=\"score" + players[i].id + "\"></td>";
    }
    $("table.score tbody").append("<tr id=\"" + tour + "\"><td class=\"scoreTour\">" + tour + "</td>" + lineData + "</tr>");
}

function displayPlayerScore(tour, player) {
    $("tr#" + tour + " td.score" + player.id).append(player.score);
}
