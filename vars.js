const menuInputDelay = 10

function createStartMenu() {
  return ({
    selected: 0,
    timeTillNextInput: menuInputDelay,
  })
}

function createSinglePlayer() {
  return ({
    balls: [
      {
        x: gameWidth / 2,
        y: gameHeight / 2,
        size: 10,
        color: "white",
        speed: 8,
        xMove: 2,
        yMove: 2,
      }
    ],
    paddles: [
      {
        x: 50,
        y: gameHeight / 2,
        width: 10,
        height: 185,
        speed: 4,
        color: 'white'
      }
    ]
    
  })
}

function createSinglePlayerPause() {
  return ({
    selected: 0,
    timeTillNextInput: menuInputDelay,
  })
}