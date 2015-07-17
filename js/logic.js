function verifyCanRoll(player, manche, currentScore) {
    if (!manche.firstBrasse) {
        if (player.iceBreak) {
            return verifyMakePoints(manche.scoreBrasse[manche.brasse], currentScore);
        } else {
            return manche.brasse < 2 && verifyMakePoints(manche.scoreBrasse[manche.brasse], currentScore);
        }
    }
    return true;
}

function verifyCanScore(player, manche, currentScore) {
    if (player.iceBreak) {
        return verifyMakePoints(manche.scoreBrasse[manche.brasse], currentScore);
    } else {
        return (manche.score + currentScore) >= 500 && verifyMakePoints(manche.scoreBrasse[manche.brasse], currentScore);
    }
}

function verifyMakePoints(lastScore, currentScore) {
    return currentScore > lastScore;
}

function verifyNextBrasse(player, manche, hand) {
    if (player.iceBreak) {
        return verifyAllDiceMakePoints(hand)
    } else {
        return manche.brasse < 2 && verifyAllDiceMakePoints(hand)
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

function verifyNextTour(playerIndex, playerCounts) {
    return playerIndex + 1 > playerCounts - 1;
}
