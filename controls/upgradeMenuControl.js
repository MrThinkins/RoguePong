function upgradeMenuControl() { 
  if (state.current.timeTillNextInput <= 0) {
    menuSelectMove(2)

    console.log('stuff')

    if (state.input.player1.escape || state.input.player1.enter) {
      addUpgrade(1)
      addUpgrade(0)

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