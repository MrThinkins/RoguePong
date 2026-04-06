function startMenuControl() {
  if (state.current.timeTillNextInput <= 0) {
    menuSelectMove(2)

    if (state.input.player1.enter) {
      bounceSound.play(0.5, state.soundEffect / 100)
      if (state.current.selected == 0) {
        state.screen = "singlePlayer"
        state.game = createSinglePlayer()
      } else if (state.current.selected == 1) {
        // state.screen = "twoPlayer"
      } else if (state.current.selected == 2) {
        state.screen = "options"
        state.current = createOptionMenu()
        state.lastScreen = "startMenu"
        state.lastScreenFunction = createStartMenu
      }
    }
  }

  if (state.current.timeTillNextInput >= 1) {
    state.current.timeTillNextInput -= 1
  }
}