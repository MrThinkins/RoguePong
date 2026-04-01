function startMenuControl() {
  if (state.current.timeTillNextInput <= 0) {
    menuSelectMove(2)

    if (state.input.player1.enter) {
      if (state.current.selected == 0) {
        state.screen = "singlePlayer"
        state.game = createSinglePlayer()
      } else if (state.current.selected == 1) {
        state.screen = "twoPlayer"
      } else if (state.current.selected == 2) {
        state.screen = "startOptions"
      }
    }
  }
  

  if (state.current.timeTillNextInput >= 1) {
    state.current.timeTillNextInput -= 1
  }
}