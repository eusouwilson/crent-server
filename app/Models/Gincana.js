'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Gincana extends Model {
  static get table() {
    return 'gincana'

  }
}

module.exports = Gincana
