function gameLoop() {
  controlsInput()
  clearScreen()
  renderBackground()
  if (state.screen == "startMenu") {
    startMenuControl()
    renderStartMenu()
  }

  requestAnimationFrame(gameLoop)
}

gameLoop()