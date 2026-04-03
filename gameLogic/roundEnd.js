function roundEnd() {
  if (state.game.score >= state.game.scoreToPass) {
    state.screen = "upgrades"
    createUpgradeChoices()
  } else {
    state.screen = "gameLoss"
  }
}