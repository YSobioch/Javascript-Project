var expect = chai.expect;

describe('myMethods', function() {
    describe('#compareCards', function() {
        it('should compare the top cards of each deck, then award 2 points to the higher card, then remove the top card from each players deck', function(){
            var testTable = new Table;
            let player1 = new Players('Player One');
            let player2 = new Players('Player Two');
            testTable.players.push(player1);
            testTable.players.push(player2);
            testTable.players[0].hand.push(new Card (10, 'Hearts'));
            testTable.players[1].hand.push(new Card (5, 'Clubs'))
            var x = testTable.compareCards()
            expect(testTable.players[0].points).to.equal(2);
        });
    });
});