function renderStartMenu() {
  ctx.fillStyle = "white"
  ctx.font = "150px Arial"
  ctx.fillText("Ro Pong", gameWidth / 2 - 300, gameHeight / 2 - 300)

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

  if (state.current.selected == 0) {
    ctx.fillStyle = "grey"
    ctx.fillRect(textPos.singlePlayer.x - 15, textPos.singlePlayer.y + 25, 475, -100)
  }
  

  ctx.fillStyle = "white"
  ctx.font = "75px Arial"
  ctx.fillText("Single Player", textPos.singlePlayer.x, textPos.singlePlayer.y)
  ctx.fillText("Two Player", textPos.twoPlayer.x, textPos.twoPlayer.y)
  ctx.fillText("Options", textPos.options.x, textPos.options.y)
}