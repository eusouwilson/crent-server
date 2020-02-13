'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EquipeSchema extends Schema {
  up () {
    this.create('equipes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('equipes')
  }
}

module.exports = EquipeSchema
