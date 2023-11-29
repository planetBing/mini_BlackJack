const { view, printStartMessage } = require("./stage1_view.js");
const { gameData, cardData } = require("./stage1_model.js");

function progressGame() {
    printStartMessage();
    gameData.turnIncrease();
    view.showTurn();
    cardData.addPlayerCard();
    view.showPlayerCard();
    cardData.addDealerCard();
    view.showDealerCard();
    view.showJudgement();
    view.showScore();
}

module.exports = { progressGame };
