function renderSinglePlayerPause() {
  ctx.fillStyle = "white"
  ctx.font = "150px Arial"
  ctx.fillText("Paused", gameWidth / 2 - 200, gameHeight / 2 - 350)

  const textPos = {
    resume: {
      x: gameWidth / 2 - 90,
      y: gameHeight / 2 - 0,
    },
    options: {
      x: gameWidth / 2 - 80,
      y: gameHeight / 2 + 150,
    },
    exit: {
      x: gameWidth / 2 - 15,
      y: gameHeight / 2 + 300,
    }
  }

  ctx.fillStyle = "grey"

  if (state.current.selected == 0) {
    ctx.fillRect(textPos.resume.x - 15, textPos.resume.y + 25, 310, -100)
  } else if (state.current.selected == 1) {
    ctx.fillRect(textPos.options.x - 15, textPos.options.y + 25, 290, -100)
  } else if (state.current.selected == 2) {
    ctx.fillRect(textPos.exit.x - 15, textPos.exit.y + 25, 160, -100)
  }

  ctx.fillStyle = "white"
  ctx.font = "75px Arial"
  ctx.fillText("Resume", textPos.resume.x, textPos.resume.y)
  ctx.fillText("Options",  textPos.options.x, textPos.options.y)
  ctx.fillText("Exit", textPos.exit.x, textPos.exit.y)
}