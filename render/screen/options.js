const soundEffectPos = {
  x: 1200,
  y: 400,
  xEnd: 650,
  yEnd: 10,
}

function renderOption() {
  ctx.fillStyle = "white"
  ctx.font = "150px Arial"
  ctx.fillText("Options", gameWidth / 2 - 270, 200)

  ctx.fillStyle ="grey"
  if (state.current.selected == 0) {
    ctx.fillRect(gameWidth / 2 - 310, 345, 510, 100)
  } else if (state.current.selected == 1) {
    ctx.fillRect(gameWidth / 2 - 290, 545, 490, 100)
  } else if (state.current.selected == 2) {
    ctx.fillRect(gameWidth / 2 - 120, 745, 190, 100)
  }

  ctx.fillStyle = "white"
  ctx.font = "75px Arial"
  ctx.fillText("Sound Volume", gameWidth / 2 - 300, 425)
  ctx.fillRect(soundEffectPos.x, soundEffectPos.y, soundEffectPos.xEnd, soundEffectPos.yEnd)
  

  const startEffect = soundEffectPos.x - 25 + (soundEffectPos.xEnd * state.soundEffect / 100)
  ctx.fillRect(startEffect, soundEffectPos.y - 20, 50, 50)


  ctx.fillText("Music Volume", gameWidth / 2 - 280, 625)
  ctx.fillRect(soundEffectPos.x, soundEffectPos.y + 200, soundEffectPos.xEnd, soundEffectPos.yEnd)

  if (state.current.timeTillNextInput <= 0) {
    if (state.current.selected == 0) {

    }
    menuSelectMove(2)
  }

  

  if (state.current.timeTillNextInput >= 1) {
    state.current.timeTillNextInput -= 1
  }

  ctx.fillText("Back", gameWidth / 2 - 110, 825)
}