const { gameData, cardData } = require("./stage1_model.js");

const playerCard = cardData.getPlayerCard();
const dealerCard = cardData.getDealerCard();

function judgeWinOrLose() {
    const playerCurrentCard = playerCard[playerCard.length - 1];
    const dealerCurrentCard = dealerCard[dealerCard.length - 1];
    if (playerCurrentCard > dealerCurrentCard) {
        gameData.addScore(0);
        return "당신이 이겼습니다.";
    } else if (playerCurrentCard < dealerCurrentCard) {
        gameData.addScore(1);
        return "딜러가 이겼습니다.";
    } else if (playerCurrentCard === dealerCurrentCard) {
        gameData.addScore(2);
        return "비겼습니다.";
    }
}

module.exports = { judgeWinOrLose };
