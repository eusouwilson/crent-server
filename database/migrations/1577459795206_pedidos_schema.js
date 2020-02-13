'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidoSchema extends Schema {
  up() {
    this.create('pedidos', (table) => {
      table.increments()
      table.integer('valor', 10).notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('pedidos')
  }
}

module.exports = PedidoSchema

