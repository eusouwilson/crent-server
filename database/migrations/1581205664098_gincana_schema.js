'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GincanaSchema extends Schema {
  up () {
    this.create('gincanas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('gincanas')
  }
}

module.exports = GincanaSchema
