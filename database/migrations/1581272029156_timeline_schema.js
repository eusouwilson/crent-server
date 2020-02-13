'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TimelineSchema extends Schema {
  up () {
    this.create('timelines', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('timelines')
  }
}

module.exports = TimelineSchema
