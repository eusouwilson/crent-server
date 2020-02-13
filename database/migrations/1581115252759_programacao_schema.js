'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProgramacaoSchema extends Schema {
  up () {
    this.create('programacaos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('programacaos')
  }
}

module.exports = ProgramacaoSchema
