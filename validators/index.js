const Joi = require("joi");
const { LOGIN_API_KEY, CREATE_USER_API_KEY } = require("../constants");

module.exports = {
  [LOGIN_API_KEY]: Joi.object({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(8).max(16).required(),
  }),
  [CREATE_USER_API_KEY]: Joi.object({
    name: Joi.string().max(55).required(),
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(8).max(16).required(),
    studentCode: Joi.string()
      .regex(/[0-9]{10}/)
      .optional(),
  }),
};
