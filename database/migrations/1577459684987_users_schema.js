'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {

    this.create('users', (table) => {
      table.increments()
      table.string('nome', 150).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('telefone', 15).notNullable()
      table.boolean('admin').notNullable()
      table.string('endereco').notNullable()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 9, 6).notNullable()
      table
        .integer('empresa_id')
        .unsigned()
        .references('id')
        .inTable('empresas')
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
