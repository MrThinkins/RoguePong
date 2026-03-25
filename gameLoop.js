function gameLoop() {
  clearScreen()
  renderBackground()
  if (state.screen == "startMenu") {
    renderStartMenu()
  }

  requestAnimationFrame(gameLoop)
}

gameLoop()