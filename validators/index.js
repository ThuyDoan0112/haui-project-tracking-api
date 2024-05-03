const Joi = require("joi");
const {
  LOGIN_API_KEY,
  CREATE_USER_API_KEY,
  CREATE_CLASS_API_KEY,
  UPDATE_CLASS_API_KEY,
  CREATE_REPORTS_API_KEY,
  CREATE_PROJECT_SOURCE_API_KEY,
  CREATE_DOCUMENTS_ON_CLASSES_API_KEY,
} = require("../constants");

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
  [CREATE_CLASS_API_KEY]: Joi.object({
    name: Joi.string().max(255).required(),
    code: Joi.string().max(20).required(),
    description: Joi.string().max(255).optional(),
    teacherId: Joi.number().optional(),
    startDate: Joi.string().isoDate().required(),
    endDate: Joi.string().isoDate().required(),
  }),
  [UPDATE_CLASS_API_KEY]: Joi.object({
    name: Joi.string().max(255).optional(),
    code: Joi.string().max(20).optional(),
    description: Joi.string().max(255).optional(),
    teacherId: Joi.number().optional(),
    startDate: Joi.string().isoDate().optional(),
    endDate: Joi.string().isoDate().optional(),
  }).not({}),
  [CREATE_DOCUMENTS_ON_CLASSES_API_KEY]: Joi.object({
    classId: Joi.number().required(),
    documentIds: Joi.array().items(Joi.number().required()).required(),
  }),
  [CREATE_PROJECT_SOURCE_API_KEY]: Joi.object({
    name: Joi.string().max(255).required(),
    description: Joi.string().max(255).optional(),
    path: Joi.string().required(),
    projectId: Joi.number().required(),
  }),
  [CREATE_REPORTS_API_KEY]: Joi.object({
    name: Joi.string().max(255).required(),
    description: Joi.string().max(255).optional(),
    startDate: Joi.string().isoDate().required(),
    dueDate: Joi.string().isoDate().required(),
    projectIds: Joi.array().items(Joi.number().required()).required(),
  }),
};
