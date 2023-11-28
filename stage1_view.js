const { gameData, cardData } = require("./stage1_model.js");

function printLine(message) {
    console.log(message);
}

const view = {
    showTurn() {
        printLine(`Game ${gameData.getTurn()}`);
    },
    showPlayerCard() {
        printLine(`You: ${cardData.getPlayerCard()}`);
    },
    showDealerCard() {
        printLine(`Dealer: ${cardData.getDealerCard()}`);
    },
};

// printLine("You: [9]");
//     printLine("Dealer: [10]");
//     printLine("딜러가 이겼습니다");
//     printLine("현재 전적: 0승 1패");

module.exports = { view };
