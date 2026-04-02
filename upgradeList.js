const availableUpgrades = [
  {
    name: "Bigger Paddle",
    rarity: "common",
    function: biggerPaddle,
    toCall: "roundStart",
    descriptionText: "makes your paddle bigger"
  }
]

const currentUpgrades = []

/**
 * {
 *  name: "name",
 *  rarity: "common (white), uncommon(green), rare(blue), very rare(purple), legendary(gold)",
 *  function: functionName(),
 *  toCall: "onBounce", "roundStart", "roundEnd", 
 *  descriptionText: "effect description here"  
 * }
 */