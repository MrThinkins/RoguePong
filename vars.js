const menuInputDelay = 10

function createStartMenu() {
  return ({
    selected: 0,
    timeTillNextInput: menuInputDelay,
  })
}

function createSinglePlayer() {
  return ({
    ball: {
      x: gameWidth / 2,
      y: gameHeight / 2,
      size: 10,
      color: "white"
    }
  })
}

function createSinglePlayerPause() {
  return ({
    selected: 0,
    timeTillNextInput: menuInputDelay,
  })
}