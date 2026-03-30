function singlePlayerMenuControl() {
  
  if (state.current.timeTillNextInput <= 0) {
    menuSelectMove(2)

    if (state.input.player1.enter) {
      if (state.current.selected == 0) {
        state.screen = "singlePlayer"
      } else if (state.current.selected == 2) {
        state.screen = "startMenu"
        state.current = createStartMenu()
      }
    }
  }
  
  
  if (state.current.timeTillNextInput >= 1) {
    state.current.timeTillNextInput -= 1
  }
}