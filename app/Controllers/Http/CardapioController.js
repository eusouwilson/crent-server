'use strict'
var moment = require('moment');

const Cardapio = use("App/Models/Cardapio");


class CardapioController {

  async index() {
    const cardapio = await Cardapio.query()
      .select("*")
      .where("data", ">=", moment().format('YYYY-MM-DD h:mm:ss'))
      .orderBy("data", "asc")
      .fetch();

    return cardapio;
  }



  async store({ request, response }) {
  }


  async show({ params, request, response, view }) {
  }


  async update({ params, request, response }) {
  }

  async destroy({ params, request, response }) {
  }
}

module.exports = CardapioController
