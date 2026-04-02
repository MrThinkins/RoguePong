function upgrades() {
  const tempText = "Upgrades here in the future"
  ctx.fillStyle = "green"
  ctx.font = "100px Arial"

  ctx.fillText(tempText, gameWidth / 2 - 600, 300)

  if (state.input.player1.escape || state.input.player1.enter) {
    state.game.score = 0
    state.game.scoreToPass = Math.floor(state.game.scoreToPass * 1.5)
    console.log(`scoreToPass: ${state.game.scoreToPass}`)
    state.screen = "singlePlayer"
    createNextSinglePlayerRound()
  }
}