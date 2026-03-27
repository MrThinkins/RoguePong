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
  }

  requestAnimationFrame(gameLoop)
}

gameLoop()