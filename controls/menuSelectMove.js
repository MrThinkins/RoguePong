function menuSelectMove(menuSize) {
    startMusic()

   if (state.input.player1.up) {
      bounceSound.play(1, state.soundEffect / 100)
      if (state.current.selected <= 0) {
        state.current.selected = menuSize
      } else {
        state.current.selected -= 1
      }
      state.current.timeTillNextInput = menuInputDelay
    } else if (state.input.player1.down) {
      bounceSound.play(1, state.soundEffect / 100)
      if (state.current.selected >= menuSize) {
        state.current.selected = 0
      } else {
        state.current.selected += 1
      }
      state.current.timeTillNextInput = menuInputDelay
    }
}