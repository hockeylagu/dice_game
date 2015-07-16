d1 = new Dice();
d1.face = 1;
d2 = new Dice();
d2.face = 2;
d3 = new Dice();
d3.face = 3;
d4 = new Dice();
d4.face = 4;
d5 = new Dice();
d5.face = 5;
d6 = new Dice();
d6.face = 6;

hand = new Hand();

QUnit.test("tests 2 same", function (assert) {
    hand.dices = [d1, d1, d2, d3, d4, d5];
    assert.equal(countTheSameInTheHand(hand, 1), 2);
});

QUnit.test("tests 3 same", function (assert) {
    hand.dices = [d1, d1, d1, d2, d3, d4];
    assert.equal(countTheSameInTheHand(hand, 1), 3);
});

QUnit.test("tests 4 same ", function (assert) {
    hand.dices = [d1, d1, d1, d1, d3, d4];
    assert.equal(countTheSameInTheHand(hand, 1), 4);
});

QUnit.test("tests 5 same", function (assert) {
    hand.dices = [d3, d3, d3, d3, d1, d3];
    assert.equal(countTheSameInTheHand(hand, 3), 5);
});

QUnit.test("tests 6 same", function (assert) {
    hand.dices = [d1, d1, d1, d1, d1, d1];
    assert.equal(countTheSameInTheHand(hand, 1), 6);
});

QUnit.test("tests is a pair", function (assert) {
    hand.dices = [d1, d1, d2, d3, d4, d5];
    assert.ok(isAPair(hand, 1));
});

QUnit.test("tests is not a pair", function (assert) {
    hand.dices = [d1, d2, d3, d4, d5, d6];
    assert.notOk(isAPair(hand, 1));
});

QUnit.test("tests 4 same is not a pair", function (assert) {
    hand.dices = [d1, d1, d1, d1, d2, d3];
    assert.notOk(isAPair(hand, 1));
});

QUnit.test("tests 3 pairs", function (assert) {
    hand.dices = [d1, d1, d2, d2, d4, d4];
    assert.ok(isThreePair(hand));
});

QUnit.test("tests not 3 pairs", function (assert) {
    hand.dices = [d1, d1, d1, d1, d2, d3];
    assert.notOk(isThreePair(hand));
});

QUnit.test("tests is a triple", function (assert) {
    hand.dices = [d1, d1, d1, d3, d2, d3];
    assert.ok(isATriple(hand, 1));
});

QUnit.test("tests is not triple", function (assert) {
    hand.dices = [d1, d1, d4, d2, d2, d3];
    assert.notOk(isATriple(hand, 1));
});

QUnit.test("tests 4 is not a triple", function (assert) {
    hand.dices = [d1, d1, d1, d1, d2, d3];
    assert.notOk(isATriple(hand, 1));
});

QUnit.test("tests 3 pairs", function (assert) {
    hand.dices = [d1, d1, d4, d1, d4, d4];
    assert.ok(isTwoTriple(hand));
});

QUnit.test("tests not 3 pairs", function (assert) {
    hand.dices = [d1, d1, d1, d1, d2, d3];
    assert.notOk(isTwoTriple(hand));
});

QUnit.test("tests is a straight", function (assert) {
    hand.dices = [d1, d2, d3, d4, d6, d5];
    assert.ok(isAStraight(hand));
});

QUnit.test("tests is not straight", function (assert) {
    hand.dices = [d1, d1, d1, d1, d2, d3];
    assert.notOk(isAStraight(hand));
});

QUnit.test("tests score 200 pts", function (assert) {
    hand.dices = [d1, d2, d4, d1, d2, d3];
    assert.equal(calculateScore(hand), 200);
});

QUnit.test("tests score 300 pts", function (assert) {
    hand.dices = [d1, d1, d4, d1, d2, d3];
    assert.equal(calculateScore(hand), 300);
});

QUnit.test("tests score 500 pts", function (assert) {
    hand.dices = [d5, d5, d5, d3, d2, d3];
    assert.equal(calculateScore(hand), 500);
});

QUnit.test("tests score 600 pts", function (assert) {
    hand.dices = [d4, d6, d6, d6, d2, d3];
    assert.equal(calculateScore(hand), 600);
});

QUnit.test("tests score 750 pts", function (assert) {
    hand.dices = [d1, d6, d6, d6, d2, d5];
    assert.equal(calculateScore(hand), 750);
});

QUnit.test("tests score 1000 pts", function (assert) {
    hand.dices = [d6, d5, d3, d5, d5, d5];
    assert.equal(calculateScore(hand), 1000);
});

QUnit.test("tests score 1500 pts", function (assert) {
    hand.dices = [d1, d2, d3, d5, d6, d4];
    assert.equal(calculateScore(hand), 1500);
});

QUnit.test("tests score 2000 pts", function (assert) {
    hand.dices = [d2, d2, d2, d2, d6, d2];
    assert.equal(calculateScore(hand), 2000);
});

QUnit.test("tests score 2500 pts", function (assert) {
    hand.dices = [d3, d3, d3, d5, d5, d5];
    assert.equal(calculateScore(hand), 2500);
});

QUnit.test("tests score 3000 pts", function (assert) {
    hand.dices = [d1, d1, d1, d1, d1, d1];
    assert.equal(calculateScore(hand), 3000);
});

QUnit.test("tests 6 same can roll again", function (assert) {
    hand.dices = [d1, d1, d1, d1, d1, d1];
    assert.ok(verifyAllDiceMakePoints(hand));
});

QUnit.test("tests 3 pairs can roll again", function (assert) {
    hand.dices = [d4, d6, d4, d2, d6, d2];
    assert.ok(verifyAllDiceMakePoints(hand));
});

QUnit.test("tests 2 triple can roll again", function (assert) {
    hand.dices = [d3, d2, d2, d2, d3, d3];
    assert.ok(verifyAllDiceMakePoints(hand));
});

QUnit.test("tests a straight can roll again", function (assert) {
    hand.dices = [d3, d2, d1, d5, d4, d6];
    assert.ok(verifyAllDiceMakePoints(hand));
});

QUnit.test("tests 4(5) and 2(1) can roll again", function (assert) {
    hand.dices = [d1, d5, d5, d1, d5, d5];
    assert.ok(verifyAllDiceMakePoints(hand));
});

QUnit.test("tests 3 same and 2(1) and 1(5) can roll again", function (assert) {
    hand.dices = [d1, d6, d6, d6, d1, d5];
    assert.ok(verifyAllDiceMakePoints(hand));
});

QUnit.test("tests can not roll again", function (assert) {
    hand.dices = [d2, d1, d1, d4, d2, d1];
    assert.notOk(verifyAllDiceMakePoints(hand));
});
