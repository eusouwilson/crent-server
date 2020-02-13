'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Correntista extends Model {
  static get table() {
    return 'correntista'

  }


  timeline() {
    return this.hasMany('App/Models/Timeline')
  }

}

module.exports = Correntista
