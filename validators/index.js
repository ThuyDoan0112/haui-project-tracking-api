const Joi = require("joi");
const { LOGIN_API_KEY } = require("../constants");

module.exports = {
  [LOGIN_API_KEY]: Joi.object({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(8).max(16).required(),
  }),
};
