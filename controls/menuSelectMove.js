function menuSelectMove(menuSize) {
   if (state.input.player1.up) {
      if (state.current.selected <= 0) {
        state.current.selected = menuSize
      } else {
        state.current.selected -= 1
      }
      state.current.timeTillNextInput = menuInputDelay
    } else if (state.input.player1.down) {
      if (state.current.selected >= menuSize) {
        state.current.selected = 0
      } else {
        state.current.selected += 1
      }
      state.current.timeTillNextInput = menuInputDelay
    }
}