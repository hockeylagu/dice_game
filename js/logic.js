function verifyCanRoll(game) {
    if (game.currentPlayer.iceBreak) {
        return verifyMakePoints(game.manche.scoreBrasse[game.manche.brasse], game.currentScore);
    } else {
        return game.manche.brasse < 2 && verifyMakePoints(game.manche.scoreBrasse[game.manche.brasse], game.currentScore);
    }
}

function verifyCanScore(game) {
    if (game.currentPlayer.iceBreak) {
        return verifyMakePoints(game.manche.scoreBrasse[game.manche.brasse], game.currentScore);
    } else {
        return game.manche.score + game.currentScore >= 500;
    }
}

function verifyMakePoints(lastScore, currentScore) {
    return currentScore > lastScore;
}

function verifyNextBrasse(game) {
    if (game.currentPlayer.iceBreak) {
        return verifyAllDiceMakePoints(game.hand)
    } else {
        return game.manche.brasse < 2 && verifyAllDiceMakePoints(game.hand)
    }
}

function verifyAllDiceMakePoints(hand) {
    var i, score = 0;

    if (isTwoTriple(hand) || isThreePair(hand) || isAStraight(hand)) {
        return true;
    }

    for (i = 0; i < 6; i++) {
        if (i + 1 == 1 || i + 1 == 5)
            continue;

        var num = countTheSameInTheHand(hand, i + 1);
        if (0 < num && num < 3)
            return false;
    }

    return true;
}

function verifyNextPlayer(game) {
    return game.playerIndex + 1 > game.playerCounts - 1;
}
