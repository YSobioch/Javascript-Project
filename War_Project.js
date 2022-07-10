//WAR Rules
//Deal cards between two players
//Each player plays the top card from their deck
//Compair the cards
//Higher value takes both cards
//Person with most cards at the end wins

class Card {
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }

    getRank(){
        switch(this.rank){
            case '2':
                return 2;
            case '3':
                return 3;
            case '4':
                return 4;
            case '5':
                return 5;
            case '6':
                return 6;
            case '7':
                return 7;
            case '8':
                return 8;
            case '9':
                return 9;
            case '10':
                return 10;
            case 'Jack':
                return 11;
            case 'Queen':
                return 12;
            case 'King':
                return 13;
            case 'Ace':
                return 14;
            } 
    }
}

class Deck {
    constructor(){
        this.cards = [];
        this.workingDeck = [];
        this.rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    }

    buildDeck(){
        for(let i = 0; i < this.rank.length; i++){
            this.cards.push(new Card(this.rank[i], 'Hearts'));
            this.cards.push(new Card(this.rank[i], 'Diamonds'));
            this.cards.push(new Card(this.rank[i], 'Spades'));
            this.cards.push(new Card(this.rank[i], 'Clubs'));
        }
    }

    displayDeck(){
        for(let i = 0; i < this.cards.length; i++){
            console.log(this.cards[i].rank + ' of ' + this.cards[i].suit);
        }
    }

    //The Fisher-Yates Shuffle
    shuffle(){
        var m = this.cards.length;
        var i;
        var t;
        while(m){
            i = Math.floor(Math.random() * m--);

            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
    }
}

class Players{
    constructor(name){
        this.name = name;
        this.hand = [];
        this.points = 0;
    }

    displayHand(){
        for(let i = 0; i < this.hand.length; i++){
            if(this.hand[i] != undefined){
                console.log(this.hand[i].rank + ' of ' + this.hand[i].suit);

            }
        }
    }
}

class Table{
    constructor(){
        this.players = [];
        this.playingDeck;
    }

    startGame(){
        let player1 = new Players('Player One');
        let player2 = new Players('Player Two');
        this.players.push(player1);
        this.players.push(player2);
        this.playingDeck = new Deck;
        this.playingDeck.buildDeck();
        this.playingDeck.shuffle();
        this.deal();
        this.playWar();
        this.declareWinner();
    }

    deal(){
        while(this.playingDeck.cards.length != 0){
            for(let i = 0; i < this.players.length; i++){
                this.players[i].hand.push(this.playingDeck.cards[0]);
                this.playingDeck.cards.splice(0, 1);
            }
        }
    }

    declareWinner(){
        if(this.players[0].points > this.players[1].points){
            alert(`Player 1 is the WINNER!!`);
        } else if (this.players[0].points < this.players[1].points){
            alert(`Player 2 is the WINNER!!`);
        } else {
            alert(`IT'S A TIE`);
        }
    }

    playWar(){
        alert(`Playing War`)
        while (this.players[0].hand.length !== 0){
            alert(`
                 TURNS LEFT: ${this.players[0].hand.length}
            Player 1:          points: ${this.players[0].points}
            -----------------------------
            |   ${this.players[0].hand[0].rank} of ${this.players[0].hand[0].suit}
            |           vs
            |    ${this.players[1].hand[0].rank} of ${this.players[1].hand[0].suit}
            ------------------------------
            Player 2:          points: ${this.players[1].points}
            `)
            this.compareCards();
        }

    }

    compareCards(){
        if(this.players[0].hand[0].getRank() > this.players[1].hand[0].getRank()){
            this.players[0].points += 2;
            this.players[0].hand.splice(0,1);
            this.players[1].hand.splice(0,1);
        } else if (this.players[0].hand[0].getRank() < this.players[1].hand[0].getRank()){
            this.players[1].points += 2;
            this.players[0].hand.splice(0,1);
            this.players[1].hand.splice(0,1);
        } else {
            this.players[0].hand.splice(0,1);
            this.players[1].hand.splice(0,1);
        }
    }

}

let table = new Table;
table.startGame();