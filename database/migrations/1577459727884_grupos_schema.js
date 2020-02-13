'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GrupoSchema extends Schema {
  up() {
    this.create('grupos', (table) => {
      table.increments()
      table.string('nome', 150).notNullable()
      table.string('sigla', 5).notNullable()
      table.boolean('status').notNullable()
      table
        .integer('empresa_id')
        .unsigned()
        .references('id')
        .inTable('empresas')
      table.timestamps()
    })
  }

  down() {
    this.drop('grupos')
  }
}

module.exports = GrupoSchema
