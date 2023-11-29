const gameData = {
    turn: 0,
    turnIncrease() {
        this.turn += 1;
    },
    getTurn() {
        return this.turn;
    },
    score: [0, 0, 0],
    //socore: [승, 패, 무]
    addScore(index) {
        return (this.score[index] += 1);
    },
    getScore() {
        return this.score;
    },
};

const cardData = {
    playerCard: [],
    dealerCard: [],
    addPlayerCard() {
        const randomNum = Math.floor(Math.random() * 11) + 1;
        this.playerCard.push(randomNum);
    },
    getPlayerCard() {
        return this.playerCard;
    },
    addDealerCard() {
        const randomNum = Math.floor(Math.random() * 11) + 1;
        this.dealerCard.push(randomNum);
    },
    getDealerCard() {
        return this.dealerCard;
    },
};

module.exports = { gameData, cardData };
