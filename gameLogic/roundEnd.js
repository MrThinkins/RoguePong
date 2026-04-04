function roundEnd() {
  for (let i = 0; i < currentUpgrades.length; i++) {
    if (currentUpgrades[i].toCall == "roundEnd"){
      currentUpgrades[i].function()
    }
  }
  if (state.game.score >= state.game.scoreToPass) {
    state.screen = "upgrades"
    createUpgradeChoices()
    createUpgradeMenuControls()
  } else {
    state.screen = "gameLoss"
  }
}