const gameData = {
    turn: 0,
    turnIncrease() {
        this.turn += 1;
    },
    getTurn() {
        return this.turn;
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
