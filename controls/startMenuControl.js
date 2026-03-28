function startMenuControl() {

  if (state.input.player1.up && state.current.timeTillNextInput <= 0) {
    if (state.current.selected <= 0) {
      state.current.selected = 2
    } else {
      state.current.selected -= 1
    }
    state.current.timeTillNextInput = menuInputDelay
  } else if (state.input.player1.down && state.current.timeTillNextInput <= 0) {
    if (state.current.selected >= 2) {
      state.current.selected = 0
    } else {
      state.current.selected += 1
    }
    state.current.timeTillNextInput = menuInputDelay
  }

  if (state.input.player1.enter) {
    if (state.current.selected == 0) {
      state.screen = "singlePlayer"
    } else if (state.current.selected == 1) {
      state.screen = "twoPlayer"
    } else if (state.current.selected == 2) {
      state.screen = "startOptions"
    }
  }

  if (state.current.timeTillNextInput >= 1) {
    state.current.timeTillNextInput -= 1
  }
}