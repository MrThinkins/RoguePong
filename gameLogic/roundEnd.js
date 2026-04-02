function roundEnd() {
  if (state.game.score >= state.game.scoreToPass) {
    state.screen = "upgrades"
  } else {
    state.screen = "gameLoss"
  }
}