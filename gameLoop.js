function gameLoop() {
  controlsInput()
  clearScreen()
  renderBackground()
  if (state.screen == "singlePlayer") {
    singlePlayerControl()
    renderSinglePlayer()
  } else if (state.screen == "startMenu") {
    startMenuControl()
    renderStartMenu()
  } else if (state.screen == "singlePlayerPause") {
    singlePlayerMenuControl()
    renderSinglePlayerPause()
  }

  requestAnimationFrame(gameLoop)
}

gameLoop()