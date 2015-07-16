$(document).ready(function () {
    $("p").append("hello");
});

var game;

function roll() {
    game.manche.brasse++;
    game.hand.roll();

    game.manche.scoreBrasse[game.manche.brasse] = game.currentScore;

    displayDices(game.hand);
    displayButton(false);
}

function toggleDiceSelected(hand, id) {
    if (!hand.dices[id].locked)
        hand.dices[id].selected = !hand.dices[id].selected;
}

function select(id) {
    toggleDiceSelected(game.hand, id);
    game.currentScore = calculateScore(game.hand.getSelected());
    display(game.hand, game.currentPlayer, game.manche.score + game.currentScore, verifyCanRoll(game));
}

function reset() {
    game.reset();
    display(game.hand, game.currentPlayer, 0, true);
}

function newGame() {
    game = new Game();
    reset();
    initTable(game);
}

function endTurn() {
    if (verifyCanScore(game)) {
        game.currentPlayer.iceBreak = true;
        game.currentPlayer.score += game.manche.score + game.currentScore;
    }

    displayPlayerScore(game.tour, game.currentPlayer);

    if (verifyNextPlayer(game)) {
        game.tour++;
        tableNewLine(game);
    }

    game.nextPlayer();
    reset();
}

function nextTurn() {
    game.hand = new Hand();
    game.manche.score += game.currentScore;
    game.currentScore = 0;
    display(game.hand, game.currentPlayer, game.manche.score, true);
}
