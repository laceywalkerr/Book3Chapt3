import createPets from './pets.js';

let sadie = createPets("sadie", "cat")
let gus = createPets("gus", "goose")
let finn = createPets("finn", "dog")

console.log(sadie)
console.log(gus)
console.log(finn)

const BowWowKennels = []

BowWowKennels.push(sadie, gus, finn)
console.log(BowWowKennels)