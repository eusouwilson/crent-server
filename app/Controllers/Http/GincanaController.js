'use strict'
const Gincana = use("App/Models/Gincana");
var moment = require('moment');


class GincanaController {

  async index({ request, response, view }) {

  }


  async show({ params }) {
    const gincana = await Gincana.query()
      .select("*")
      .orWhere("equipe", "=", params.equipe)
      .orderBy("data", "asc")
      .fetch();
    return gincana;
  }

  /**
   * Render a form to update an existing gincana.
   * GET gincanas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update gincana details.
   * PUT or PATCH gincanas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a gincana with id.
   * DELETE gincanas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = GincanaController
