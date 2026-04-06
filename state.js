const state = {
  screen: "options",
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
  },
  soundEffect: 80, 
}
