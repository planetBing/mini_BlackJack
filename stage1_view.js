const { gameData, cardData } = require("./stage1_model.js");
const { judgeWinOrLose } = require("./stage1_controller.js");

function printLine(message) {
    console.log(message);
}

function printStartMessage() {
    printLine("간단 카드 게임을 시작합니다.");
}

function putCardNumInBox(arr) {
    return arr.map((n) => (n < 10 ? `[ ${n}]` : `[${n}]`)).join(" ");
}

const view = {
    showTurn() {
        printLine(`Game ${gameData.getTurn()}`);
    },
    showPlayerCard() {
        printLine(`You:    ${putCardNumInBox(cardData.getPlayerCard())}`);
    },
    showDealerCard() {
        printLine(`Dealer: ${putCardNumInBox(cardData.getDealerCard())}`);
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

function printClosingMessage() {
    printLine("게임을 종료합니다. \n플레이해주셔서 감사합니다.");
}

module.exports = { printStartMessage, view, printClosingMessage };
