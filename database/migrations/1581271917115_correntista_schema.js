'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CorrentistaSchema extends Schema {
  up () {
    this.create('correntistas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('correntistas')
  }
}

module.exports = CorrentistaSchema
