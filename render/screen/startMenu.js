function renderStartMenu() {
  ctx.fillStyle = "white"
  ctx.font = "150px Arial"
  ctx.fillText("Rogue Like Pong", gameWidth / 2 - 560, gameHeight / 2 - 300)

  const textPos = {
    singlePlayer: {
      x: gameWidth / 2 - 230,
      y: gameHeight /  2 - 0,
    },
    twoPlayer: {
      x: gameWidth / 2 - 190,
      y: gameHeight / 2 + 150,
    },
    options: {
      x: gameWidth / 2 - 130,
      y: gameHeight / 2 + 300,
    }
  }

  ctx.fillStyle = "grey"

  if (state.current.selected == 0) {
    ctx.fillRect(textPos.singlePlayer.x - 15, textPos.singlePlayer.y + 25, 475, -100)
  } else if (state.current.selected == 1) {
    ctx.fillRect(textPos.twoPlayer.x - 15 - 300, textPos.twoPlayer.y + 25, 1030, -100)
    // ctx.fillRect(textPos.twoPlayer.x - 15, textPos.twoPlayer.y + 25, 410, -100)
  } else if (state.current.selected == 2) {
    ctx.fillRect(textPos.options.x - 15, textPos.options.y + 25, 290, -100)
  }

  ctx.fillStyle = "white"
  ctx.font = "75px Arial"
  ctx.fillText("Single Player", textPos.singlePlayer.x, textPos.singlePlayer.y)
  ctx.fillText("Two Player (not implemented)", textPos.twoPlayer.x - 300, textPos.twoPlayer.y)
  // ctx.fillText("Two Player", textPos.twoPlayer.x, textPos.twoPlayer.y)
  ctx.fillText("Options", textPos.options.x, textPos.options.y)
}