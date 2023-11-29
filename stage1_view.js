const { gameData, cardData } = require("./stage1_model.js");
const { judgeWinOrLose } = require("./stage1_controller.js");

function printLine(message) {
    console.log(message);
}

function printStartMessage() {
    printLine("간단 카드 게임을 시작합니다.");
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
    showJudgement() {
        printLine(judgeWinOrLose());
    },
    showScore() {
        const winScore = gameData.getScore()[0];
        const loseScore = gameData.getScore()[1];
        const drawScore = gameData.getScore()[2];
        printLine(`현재 전적: ${winScore}승 ${drawScore}무 ${loseScore}패`);
    },
};

// printLine("You: [9]");
//     printLine("Dealer: [10]");
//     printLine("딜러가 이겼습니다");
//     printLine("현재 전적: 0승 1패");

module.exports = { view, printStartMessage };
