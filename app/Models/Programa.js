'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Programa extends Model {
  static get table() {
    return 'programa'

  }
}

module.exports = Programa
