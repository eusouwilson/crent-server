'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExtratoSchema extends Schema {
  up () {
    this.create('extratoes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('extratoes')
  }
}

module.exports = ExtratoSchema
