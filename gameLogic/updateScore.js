function updateScore(type) {
  if (type == "bounce") {
    addScore(1)
  }
}

function addScore(amount) {
  state.game.score += amount
  state.game.finalScore += amount
}