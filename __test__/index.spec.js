const supertest = require('supertest')
const app = require('../app')
const { expect } = require('chai')

describe('run tests', () => {
  let request
  beforeAll(() => {
    request = supertest(app.listen())
  })

  it('should receive 200 when request /pets', async () => {
    const response = await request.get('/pets')
    expect(JSON.parse(response.text)).to.be.eql(['tobi', 'loki', 'jane'])
    expect(response.statusCode).to.be.equal(200)
  })

  it('should receive wrong when not provider pet', async () => {
    const response = await request.post('/pets').send({})
    expect(response.text).to.be.equal(
      "need to send your pet's name and species"
    )
    expect(response.statusCode).to.be.equal(500)
  })

  it('should receive wrong when already restred pet', async () => {
    const response = await request
      .post('/pets')
      .send({ name: 'tobi', species: 'ferret' })

    expect(response.text).to.be.equal('pet already registered')
    expect(response.statusCode).to.be.equal(500)
  })
  it('should receive success when new pet is added', async () => {
    const response = await request
      .post('/pets')
      .send({ name: 'bobby', species: 'chiwawa' })
    expect(response.text).to.be.eql('{"name":"bobby","species":"chiwawa"}')
    expect(response.statusCode).to.be.equal(201)
  })
  it('should get bobby after added', async () => {
    const response = await request.get('/pets/bobby')
    expect(response.text).to.be.equal('bobby is a chiwawa')
    expect(response.statusCode).to.be.equal(200)
  })
  it('should receive pet bobby after removing it', async () => {
    const response = await request.delete('/pets/bobby')
    expect(response.text).to.be.equal('{"name":"bobby","species":"chiwawa"}')
    expect(response.statusCode).to.be.equal(200)
  })
  it('should get wrong when trying to delete nonexistent', async () => {
    const response = await request.delete('/pets/bobby')
    expect(response.text).to.be.equal('pet not found')
    expect(response.statusCode).to.be.equal(404)
  })
})
