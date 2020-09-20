'use strict';

/**
 * contact-form.js controller
 *
 * @description: A set of functions called "actions" of the `contact-form` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */
  index: async (ctx) => {
    // Send 200 `ok`
    ctx.send({
      message: 'ok, index of contact-form'
    });
  },

  list: async (ctx) => {
    const result = await strapi.entityService.find({}, {model: "plugins::contact-form.message"});
    return result;
  },

  postMessage: async (ctx) => {
    const data = ctx.request.body;
    // console.log(ctx.request.body);

    if(!data.name || !data.email || !data.message) {
      ctx.badRequest('All parameter must be supplied');
    }
 
    const result = await strapi.entityService.create({data}, {model: "plugins::contact-form.message"});

    // Send 200 `ok`
    ctx.send({
      message: 'ok, Save contact-form',
      result
    });
  }
};

