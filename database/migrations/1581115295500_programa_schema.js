'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProgramaSchema extends Schema {
  up () {
    this.create('programas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('programas')
  }
}

module.exports = ProgramaSchema
