
let { mongooseErrorHandling } = require('../model/errorHandling')
let { createUser } = require('../model/authentication')
let { user } = require('../utils/links')
const Payload = require('../utils/Payload')

module.exports = (server) => {
  server.get('/user', async (req, res, next) => {
    let payload = new Payload(req)
    payload.setPath(user)
    try {
      // TODO: LIST ALL USERS
      getAllUsers()
      res.send(payload)
    } catch (e) {
      let error = mongooseErrorHandling(e)
      res.send(error.status, error.message)
    }
    next()
  })

  server.post('/user', async (req, res, next) => {
    let payload = new Payload(req)
    payload.setPath(user)
    let {username, password} = req.body
    try {
      let user = await createUser(username, password)
      payload.setData(user)
      payload.setMessage('User created')
      res.send(payload)
    } catch (e) {
      let error = mongooseErrorHandling(e)
      payload.setMessage(error.message)
      res.send(error.code, payload)
    }
    next()
  })
  server.get('/user/:id', async (req, res, next) => {
    let id = req.params.id
    let payload = new Payload(req)
    payload.setPath(user.id)
    // TODO: this should return the current user
    res.send(payload)
    next()
  })
}
