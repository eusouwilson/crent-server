'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Timeline extends Model {
  static get table() {
    return 'timeline'

  }

  static get computed () {
    return ['url']
  }

  getUrl ({ path }) {
    return `http://apibanco.mnem.org.br
    /images/${path}`
  }


  correntista() {
    return this.belongsTo('App/Models/Correntista')
  }
}

module.exports = Timeline
