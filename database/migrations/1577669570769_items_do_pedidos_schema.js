'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemsDoPedidosSchema extends Schema {
  up() {
    this.create('items_do_pedidos', (table) => {
      table.increments()
      table
        .integer('item_id')
        .unsigned()
        .references('id')
        .inTable('items')
      table
        .integer('pedido_id')
        .unsigned()
        .references('id')
        .inTable('pedidos')
      table.timestamps()
    })
  }

  down() {
    this.drop('items_do_pedidos')
  }
}

module.exports = ItemsDoPedidosSchema
