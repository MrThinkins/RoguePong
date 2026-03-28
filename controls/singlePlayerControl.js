function singlePlayerControl() {
  if (state.input.player1.escape) {
    state.screen = "singlePlayerPause"
    state.current = createSinglePlayerPause()
  }
}