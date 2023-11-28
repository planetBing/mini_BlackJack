const { view } = require("./stage1_view.js");
const { gameData, cardData } = require("./stage1_model.js");

function progressGame() {
    gameData.turnIncrease();
    view.showTurn();
    cardData.addPlayerCard();
    view.showPlayerCard();
    cardData.addDealerCard();
    view.showDealerCard();
}

module.exports = { progressGame };
