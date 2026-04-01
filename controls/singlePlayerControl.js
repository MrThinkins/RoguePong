function singlePlayerControl() {
  if (state.input.player1.escape) {
    state.screen = "singlePlayerPause"
    state.current = createSinglePlayerPause()
  }

  if (state.input.player1.up) {
    movePaddle(0, true)
  } else if (state.input.player1.down) {
    movePaddle(0, false)
  }
}