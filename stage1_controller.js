const { turnData } = require("./stage1_model.js");

turnData.increase();
console.log(turnData.turn);
turnData.increase();
console.log(turnData.turn);
turnData.increase();
console.log(turnData.turn);
// function increaseTurn(model) {
//     model.turn += 1;
//     console.log(model.turn);
// }

// increaseTurn();
// increaseTurn(model);
// increaseTurn(model);
