console.log("\n----------------------------Dogs Exercise Output---------------------------------\n ")

// Dogs ---------------------------------------------------------------------------------------------------------------------------------------------

// Complete the following program to add the definition of the Dog class.
// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".


// TODO: define the Dog class here
class Dog {
    constructor(name, species, size) {
        this.name = name 
        this.species = species
        this.size = size
    }

    bark() {
        return this.size > 60 ? 'Grrr! Grrr!' : 'Woof! Woof!'
    }
}


//provided code to check:

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);













// Character inventory --------------------------------------------------------------------------------------------------------------------------------------

// Improve the example RPG to add character inventory management according to the following rules:

//    -  A character's inventory contains a number of gold and a number of keys
//    -  Each character begins with 10 gold and 1 key
//    -  The character description must show the inventory state
//    -  When a character slays another character, the victim's inventory goes to its vanquisher.
console.log("\n----------------------------Character Inventory Exercise Output---------------------------------\n ")

class Character {
    

    constructor(name, health, strength) {
      this.name = name
      this.health = health
      this.strength = strength
      this.xp = 0
      this.inventory = { //create inventory object with gold and keys
          gold : 10,
          keys : 1
      }
    }


    attack(target) {
      if (this.health > 0) {
        const damage = this.strength
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        )
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`)
        } else {
          target.health = 0
          const bonusXP = 10
          this.inventory.gold += target.inventory.gold //take gold
          this.inventory.keys += target.inventory.keys //take keys
          console.log(
            `${this
              .name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.inventory.gold} gold and ${target.inventory.keys} key(s)` // update description with additional gold and keys
          )
          this.xp += bonusXP
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`)
      }
    }
    

    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.inventory.gold} gold and ${this.inventory.keys} key(s)` //update description to include gold and keys
    }
  }






// provided code to check if correct
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());










console.log("\n----------------------------Account List Exercise Output---------------------------------\n ")

// Account list

// Let's build upon a previous account object exercise. A bank account is still defined by:

//    - A name property.
//    - A balance property, initially set to 0.
//    - A credit method adding the value passed as an argument to the account balance.
//    - A describe method returning the account description.

// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. 
// These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class BankAccount {
    constructor(name) {
        this.name = name
        this.balance = 0
    }

    credit(amount) {
        this.balance += amount
    }

    describe() {
        console.log(`owner: ${this.name}, balance: $${this.balance}`)
    }
}


const accA = new BankAccount('Sean')
const accB = new BankAccount('Brad')
const accC = new BankAccount('Georges')

const arr = [accA, accB, accC]

arr.forEach(e => {
    e.credit(1000)
    e.describe()
})

