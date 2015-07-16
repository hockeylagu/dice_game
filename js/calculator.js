function countTheSameInTheHand(hand, face) {
    var i, num = 0;

    for (i = 0; i < hand.dices.length; i++) {
        if (hand.dices[i].face == face)
            num++;
    }

    return num;
}

function convertToScore(num, face) {
    var score = 0;

    switch (num) {
        case 3:
            if (face == 1) {
                score = 300;
            } else {
                score = face * 100;
            }
            break;
        case 4:
            score = 1000;
            break;
        case 5:
            score = 2000;
            break;
        case 6:
            score = 3000;
            break;
        default:
            if (face == 1)
                score = num * 100;
            if (face == 5)
                score = num * 50;
    }

    return score;
}

function isAPair(hand, face) {
    var i, num = 0;

    for (i = 0; i < hand.dices.length; i++) {
        if (hand.dices[i].face == face)
            num++;
        if (num > 2)
            return false;
    }

    return num == 2;
}

function isThreePair(hand) {
    var i, num = 0;

    for (i = 0; i < 6; i++) {
        if (isAPair(hand, i + 1))
            num++;
    }

    return num == 3;
}

function isATriple(hand, face) {
    var i, num = 0;

    for (i = 0; i < hand.dices.length; i++) {
        if (hand.dices[i].face == face)
            num++;
        if (num > 3)
            return false;
    }

    return num == 3;
}

function isTwoTriple(hand) {
    var i, num = 0;

    for (i = 0; i < 6; i++) {
        if (isATriple(hand, i + 1))
            num++;
    }

    return num == 2;
}

function isAStraight(hand) {
    var i, j, s = 0;

    for (i = 0; i < 6; i++) {
        var num = 0;
        for (j = 0; j < hand.dices.length; j++) {
            if (hand.dices[j].face == i + 1) {
                num++;
                s++;
            }
            if (num > 1)
                return false;
        }
    }

    return s == 6;
}

function calculateScore(hand) {
    var i, score = 0;

    if (isTwoTriple(hand)) {
        return 2500;
    }

    if (isThreePair(hand) || isAStraight(hand)) {
        return 1500;
    }

    for (i = 0; i < 6; i++) {
        score += convertToScore(countTheSameInTheHand(hand, i + 1), i + 1)
    }

    return score;
}
