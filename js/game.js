$(document).ready(function () {
    $("p").append("hello");
});

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
    reset();
    initTable(game);
}

function endTurn() {
    if (verifyCanScore(game.currentPlayer, game.manche, game.currentScore)) {
        game.currentPlayer.iceBreak = true;
        game.currentPlayer.score += game.manche.score + game.currentScore;
    }

    displayPlayerScore(game.tour, game.currentPlayer);

    if (verifyNextTour(game.playerIndex, game.playerCounts)) {
        game.tour++;
        tableNewLine(game);
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
