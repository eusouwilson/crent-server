'use strict'
const Timeline = use("App/Models/Timeline");
const Correntista = use("App/Models/Correntista");

var moment = require('moment');

const Helpers = use('Helpers')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with timelines
 */
class TimelineController {
  /**
   * Show a list of all timelines.
   * GET timelines
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const timeline = await Timeline.query()
      .orderBy("created", "asc")
      .fetch();
    return timeline;

  }



  async store({ params, request }) {
    const data = request.only(['texto'])
    const timeline = await Timeline;
    const images = request.file('image', {
      types: ['image'],
      size: '2mb'
    })

    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
    }))

    if (!images.movedAll()) {
      return images.errors()
    }
    await Promise.all(
      images
        .movedList()
        .map(image => timeline.create({ img: image.fileName, usuario: params.id, texto: data.texto }))
    )

  }




}

module.exports = TimelineController
