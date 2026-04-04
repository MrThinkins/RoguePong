function addUpgrade(index) {
  console.log('index')
  console.log(availableUpgrades[index])
  currentUpgrades.push(availableUpgrades[index])
  console.log(`currentUpgrades.length: ${currentUpgrades.length}`)
  if (availableUpgrades[index].rarity != "common" ) {
    availableUpgrades.splice(index, 1)
    console.log(`currentUpgrades.length: ${currentUpgrades.length}`)
  }
  
}