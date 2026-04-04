const availableUpgrades = [
  {
    name: "Bigger Paddle",
    rarity: "uncommon",
    function: biggerPaddle,
    toCall: "roundStart",
    descriptionText: "Makes your paddle bigger"
  },
  {
    name: "Faster Move Speed",
    rarity: "common",
    function: fasterMoveSpeed,
    toCall: "roundStart",
    descriptionText: "Makes your paddle move faster"
  },
  {
    name: "+1 Point On Bounce",
    rarity: "common",
    function: plusOneBounce,
    toCall: "onBounce",
    descriptionText: "+1 point per bounce"
  },
  {
    name: "+2 Points On Bounce",
    rarity: "uncommon",
    function: plusTwoBounce,
    toCall: "onBounce",
    descriptionText: "+2 points per bounce"
  },
  {
    name: "+4 Points On Bounce",
    rarity: "rare",
    function: plusFourBounce,
    toCall: "onBounce",
    descriptionText: "+4 points per bounce"
  },
  {
    name: "+8 Points On Bounce",
    rarity: "very rare",
    function: plusEightBounce,
    toCall: "onBounce",
    descriptionText: "+8 points per bounce"
  },
  {
    name: "x2 Score",
    rarity: "very rare",
    function: timesTwoEnd,
    toCall: "roundEnd",
    descriptionText: "At end of round double score"
  },
  {
    name: "Stacking Points Per Bounce",
    rarity: "legendary",
    function: stackingPoints,
    toCall: "onBounce",
    descriptionText: "Every bounce gives +1 point stacking",
  },
  {
    name: "+16 Points On Bounce",
    rarity: "legendary",
    function: plusSixteenBounce,
    toCall: "onBounce",
    descriptionText: "+16 points per bounce"
  },
  {
    name: "x3 Score",
    rarity: "legendary",
    function: timesThreeEnd,
    toCall: "roundEnd",
    descriptionText: "At end of round triple score"
  },
  {
    name: "x4 Score",
    rarity: "legendary",
    function: timesFourEnd,
    toCall: "roundEnd",
    descriptionText: "At end of round quadruple score"
  }
]

const currentUpgrades = []


/**
 * {
 *  name: "name",
 *  rarity: "common (white), uncommon(green), rare(blue), very rare(purple), legendary(gold)",
 *  function: functionName(),
 *  toCall: "onBounce", "roundStart", "roundEnd", "once", 
 *  descriptionText: "effect description here"  
 * }
 */

function createUpgradeChoices() {
  
  
  const tempUpgradeChoicesIndexes = []
  for (let i = 0; i < 3; i++) {
    // generate rarity base on luck
    let rarityNumber = Math.floor(Math.random() * 10000)
    let rarity = "common"
    if (rarityNumber < 2000 && state.game.stats.luck) {
      rarity = "legendary"
    } else if (rarityNumber < 4000 && state.game.stats.luck * 2)
    {
      rarity = "very rare"
    } else if (rarityNumber < 6000 && state.game.stats.luck * 4) {
      rarity = "rare"
    } else if (rarityNumber < 8000 && state.game.stats.luck * 8) {
      rarity = "uncommon"
    }

    let possibleList = []

    if (rarity == "legendary") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "legendary")
      if (possibleList.length == 0) {
        rarity = "very rare"
      }
    }
    if (rarity == "very rare") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "very rare")
      if (possibleList.length == 0) {
        rarity = "rare"
      }
    }
    if (rarity == "rare") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "rare")
      if (possibleList.length == 0) {
        rarity = "uncommon"
      }
    }
    if (rarity == "uncommon") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "uncommon")
      if (possibleList.length == 0) {
        rarity = "common"
      }
    }
    if (rarity == "common") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "common")
    }

    console.log(`possibleList:  ${possibleList}`)
    console.log(possibleList)

    const possibleIndex = Math.floor(Math.random() * possibleList.length)
    const upgradeIndex = availableUpgrades.findIndex(ability => ability.name == possibleList[possibleIndex].name)
    tempUpgradeChoicesIndexes.push(upgradeIndex)
  }
  upgradeChoicesIndexes = tempUpgradeChoicesIndexes
}

let upgradeChoicesIndexes
createUpgradeChoices()