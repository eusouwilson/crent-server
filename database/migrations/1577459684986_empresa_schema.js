'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up() {
    this.create('empresas', (table) => {
      table.increments()
      table.string('nome', 150).notNullable()
      table.string('endereco').notNullable()
      table.integer('fone', 15).notNullable()
      table.string('slogan').notNullable()
      table.string('path_logo').notNullable()
      table.time('horario_inicio').notNullable()
      table.time('horario_fim').notNullable()
      table.string('dias_func').notNullable()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 9, 6).notNullable()
      table.integer('raio', 10).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
