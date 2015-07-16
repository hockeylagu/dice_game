function display(hand, player, score, roll) {
    displayPlayer(player);
    displayButton(roll);
    displayDices(hand);
    displayScore(player, score);
}

function displayPlayer(player) {
    $("#playerName").empty();
    $("#playerName").append(player.name);
}

function displayButton(roll) {
    if (roll) {
        $("#roll").removeAttr("disabled");
    } else {
        $("#roll").attr("disabled", "true");
    }
}

function displayScore(player, score) {
    $("#scorePlayer").empty();
    $("#scorePlayer").append(player.score);
    $("#score").empty();
    $("#score").append(score);
}

function displayDices(hand) {
    var i, num = 0;
    for (i = 0; i < hand.dices.length; i++) {
        $(".dice#" + i).empty();
        $(".dice#" + i).append(hand.dices[i].face);
        if (hand.dices[i].selected) {
            $(".dice#" + i).append(" *");
            num++;
        }

        if (hand.dices[i].face == 0) {
            $(".dice#" + i).attr("disabled", "true");
        } else {
            $(".dice#" + i).removeAttr("disabled");
        }
    }

    $(".dice#turn").hide();
    if (num == 6 && verifyNextBrasse(game)) {
        $(".dice#turn").show();
    }
}

function initTable(game) {
    var i;
    $("table thead tr").empty();
    $("table thead tr").append("<th>Tour</th>");
    for (i = 0; i < game.players.length; i++) {
        $("table thead tr").append("<th>" + game.players[i].name + "</th>");
    }

    $("table tbody").empty();
    tableNewLine(game);
}

function tableNewLine(game) {
    var lineData = "";
    for (i = 0; i < game.players.length; i++) {
        lineData += "<td class=\"data" + game.players[i].name + "\"></td>";
    }
    $("table tbody").append("<tr id=\"" + game.tour + "\"><td class=\"dataTour\">" + game.tour + "</td>" + lineData + "</tr>");
}

function displayPlayerScore(tour, player) {
    $("tr#" + tour + " td.data" + player.name).append(player.score);
}
