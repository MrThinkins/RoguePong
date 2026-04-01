function gameLoss() {
  const lossText = "You Lose"
  const lossScore = `Final Score: ${state.game.score}`
  ctx.fillStyle = "red"
  ctx.font = "100px Arial"

  ctx.fillText(lossText, gameWidth / 2 - 205, 400)

  ctx.font = "50px Arial"
  ctx.fillText(lossScore, gameWidth / 2 - 150, 600)

  if (state.input.player1.escape || state.input.player1.enter) {
    state.screen = "startMenu"
  }
}