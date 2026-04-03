const availableUpgrades = [
  {
    name: "Bigger Paddle",
    rarity: "uncommon",
    function: biggerPaddle,
    toCall: "roundStart",
    descriptionText: "makes your paddle bigger"
  },
  {
    name: "Stacking Points Per Bounce",
    rarity: "legendary",
    function: stackingPoints,
    toCall: "onBounce",
    descriptionText: "Every bounce gives +1 point stacking",
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

function createUpgradeChoices() {
  const tempUpgradeChoicesIndexes = []
  for (let i = 0; i < 3; i++) {
    const upgradeIndex = Math.floor(Math.random() * availableUpgrades.length)
    tempUpgradeChoicesIndexes.push(upgradeIndex)
  }
  upgradeChoicesIndexes = tempUpgradeChoicesIndexes
}

let upgradeChoicesIndexes
createUpgradeChoices()