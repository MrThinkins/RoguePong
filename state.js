const state = {
  screen: "startMenu",
  players: [

  ],
  current: createStartMenu(),
  game: createSinglePlayer(),
  input: {
    player1: {
      up: false,
      down: false,
      enter: false,
      escape: false,
    }
  }
}
