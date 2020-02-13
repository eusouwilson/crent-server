'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up() {
    this.create('items', (table) => {
      table.increments()
      table.string('nome', 150).notNullable()
      table.string('descricao', 5).notNullable()
      table.decimal('preco').notNullable()
      table
        .integer('grupo_id')
        .unsigned()
        .references('id')
        .inTable('grupos')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('empresa_id')
        .unsigned()
        .references('id')
        .inTable('empresas')
      table.timestamps()
    })
  }

  down() {
    this.drop('items')
  }
}

module.exports = ItemSchema
