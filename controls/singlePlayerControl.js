function singlePlayerControl() {
  if (state.input.player1.escape) {
    bounceSound.play(2, state.soundEffect / 100)
    state.screen = "singlePlayerPause"
    state.current = createSinglePlayerPause()
  }

  if (state.input.player1.up) {
    movePaddle(0, true)
  } else if (state.input.player1.down) {
    movePaddle(0, false)
  }
}