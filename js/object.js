function Dice() {
    this.MAX_FACE = 6;
    this.face = 0;
    this.selected = false;
    this.locked = false;
}

function diceRoller(dice) {
    dice.face = Math.floor(Math.random() * 6) + 1;
}

function Hand() {
    this.dices = [new Dice(),
                  new Dice(),
                  new Dice(),
                  new Dice(),
                  new Dice(),
                  new Dice()];
    this.roll = function () {
        var i;
        for (i = 0; i < this.dices.length; i++) {
            if (!this.dices[i].selected) {
                diceRoller(this.dices[i]);
            } else {
                this.dices[i].locked = true;
            }
        }
    };
    this.getSelected = function () {
        var hand = new Hand();
        var i, a = [];
        for (i = 0; i < this.dices.length; i++) {
            if (this.dices[i].selected)
                a.push(this.dices[i]);
        }

        hand.dices = a;
        return hand;
    };
}

function Player(name) {
    this.name = name;
    this.score = 0;
    this.iceBreak = false;
}

function Manche() {
    this.score = 0;
    this.firstBrasse = true;
    this.brasse = 0;
    this.scoreBrasse = [0];
}

function Game() {
    this.players = [new Player("Player1"),
                    new Player("Player2")];
    this.playerIndex = 0;
    this.currentPlayer = this.players[0];
    this.playerCounts = this.players.length;

    this.hand = new Hand();
    this.manche = new Manche();
    this.tour = 1;
    this.currentScore = 0;

    this.nextPlayer = function () {
        this.playerIndex = (this.playerIndex + 1 > this.playerCounts - 1) ? 0 : this.playerIndex + 1;
        this.currentPlayer = this.players[this.playerIndex];
    };

    this.reset = function () {
        this.manche = new Manche();
        this.hand = new Hand();
        this.currentScore = 0;
    }
}
