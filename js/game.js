var game;

function roll() {
    game.manche.brasse++;
    game.manche.firstBrasse = false;
    game.hand.roll();

    game.manche.scoreBrasse[game.manche.brasse] = game.currentScore;

    display(game);
}

function toggleDiceSelected(hand, id) {
    if (!hand.dices[id].locked)
        hand.dices[id].selected = !hand.dices[id].selected;
}

function select(id) {
    if(!game.started)
        return;

    toggleDiceSelected(game.hand, id);
    game.currentScore = calculateScore(game.hand.getSelected());
    display(game);
}

function reset() {
    game.reset();
    display(game);
}

function newGame() {
    game = new Game();
    game.started = true;
    initTable(game.players);
    reset();
}

function endTurn() {
    if (!game.started)
        return;

    if (verifyWinner(game.isLastTurn, game.nextPlayerId (), game.winnerPlayer)) {
        game.winnerPlayer = verifyWinnerPlayer(game.players);
        game.started = false;
        displayWinner(game.winnerPlayer);
        displayInfo("Play Again !");
        return;
    }

    if (verifyCanScore(game.currentPlayer, game.manche, game.currentScore)) {
        game.currentPlayer.iceBreak = true;
        game.currentPlayer.score += game.manche.score + game.currentScore;

        if (verifyEndGame(game.currentPlayer)) {
            game.isLastTurn = true;
            game.winnerPlayer = game.currentPlayer.id;
            displayInfo("Last Turn");
        }
    }

    displayPlayerScore(game.tour, game.currentPlayer);

    if (verifyNextTour(game.playerIndex, game.playerCounts)) {
        game.tour++;
        tableNewLine(game.tour, game.players);
    }

    game.nextPlayer();
    reset();
}

function nextTurn() {
    game.hand = new Hand();
    game.manche.score += game.currentScore;
    game.manche.firstBrasse = true;
    game.currentScore = 0;
    display(game);
}
