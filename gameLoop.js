function gameLoop() {
  controlsInput()
  clearScreen()
  renderBackground()
  if (state.screen == "singlePlayer") {
    drawPaddles()
    moveBalls()
    singlePlayerControl()
    renderSinglePlayer()
  } else if (state.screen == "startMenu") {
    startMenuControl()
    renderStartMenu()
  } else if (state.screen == "singlePlayerPause") {
    singlePlayerMenuControl()
    renderSinglePlayerPause()
  } else if (state.screen == "gameLoss") {
    gameLoss()
  }

  requestAnimationFrame(gameLoop)
}

gameLoop()