function gameLoop() {
  controlsInput()
  clearScreen()
  renderBackground()
  if (state.screen == "startMenu") {
    renderStartMenu()
  }

  requestAnimationFrame(gameLoop)
}

gameLoop()