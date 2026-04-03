function roundEnd() {
  if (state.game.score >= state.game.scoreToPass) {
    state.screen = "upgrades"
    createUpgradeChoices()
    createUpgradeMenuControls()
  } else {
    state.screen = "gameLoss"
  }
}