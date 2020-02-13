'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Timeline extends Model {
  static get table() {
    return 'timeline'

  }
  correntista() {
    return this.belongsTo('App/Models/Correntista')
  }
}

module.exports = Timeline
