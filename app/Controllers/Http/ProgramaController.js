'use strict'
var moment = require('moment');

const Programa = use("App/Models/Programa");

class ProgramaController {

  async index() {
    const programa = await Programa.query()
      .select("*")
      .where("data", ">=", moment().format('YYYY-MM-DD h:mm:ss'))
        .orderBy("data", "asc")
      .fetch();

    return programa;
  }
}
module.exports = ProgramaController
