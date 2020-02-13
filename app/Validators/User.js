'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      nome:'required',
      email:'required|email|unique:users',
      password:'required|confirmed'
    }
  }
}

module.exports = User
