const {
    printStartMessage,
    view,
    printClosingMessage,
} = require("./stage1_view.js");
const { gameData, cardData } = require("./stage1_model.js");
const { decideToContinueGame } = require("./stage1_controller.js");

function progressGame() {
    printStartMessage();
    while (gameData.isContinue) {
        gameData.increaseTurn();
        view.showTurn();
        cardData.addPlayerCard();
        view.showPlayerCard();
        cardData.addDealerCard();
        view.showDealerCard();
        view.showJudgement();
        view.showScore();
        decideToContinueGame();
    }
    printClosingMessage();
}

module.exports = { progressGame };
