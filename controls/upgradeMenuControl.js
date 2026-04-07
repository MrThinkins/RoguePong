function upgradeMenuControl() { 
  if (state.current.timeTillNextInput <= 0) {
    menuSelectMove(upgradeChoicesIndexes.length - 1)

    if (state.input.player1.escape || state.input.player1.enter) {
      bounceSound.play(2, state.soundEffect / 100)
      addUpgrade(upgradeChoicesIndexes[state.current.selected])

      state.game.score = 0
      state.game.scoreToPass = Math.floor(state.game.scoreToPass * 1.5)
      console.log(`scoreToPass: ${state.game.scoreToPass}`)
      state.screen = "singlePlayer"
      createNextSinglePlayerRound()
    }
  }

  if (state.current.timeTillNextInput) {
    state.current.timeTillNextInput -= 1
  }
}