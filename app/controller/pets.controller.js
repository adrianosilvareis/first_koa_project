const db = require('../models/pets.model')

const pets = {
  list: ctx => {
    const names = Object.keys(db)
    ctx.body = names
  },

  show: ctx => {
    const pet = db[ctx.params.name]
    if (!pet) return ctx.throw('cannot find that pet', 404)
    ctx.body = pet.name + ' is a ' + pet.species
  },
  add: ctx => {
    const newPet = ctx.request.body

    if (!newPet.name || !newPet.species)
      return ctx.throw("need to send your pet's name and species")

    const pet = db[ctx.request.body.name]
    if (pet && Object.keys(pet).length) ctx.throw('pet already registered')

    db[newPet.name] = newPet

    ctx.body = newPet
    ctx.status = 201
  },
  remove: ctx => {
    const pet = db[ctx.params.name]

    if (!pet) return ctx.throw(404, 'pet not found')

    ctx.body = pet

    delete db[ctx.params.name]
  }
}

module.exports = pets
