const LOGIN_API_KEY = "POST_/api/v1/auth/login";

const CREATE_USER_API_KEY = "^POST_/api/v1/users$";

const CREATE_CLASS_API_KEY = "^POST_/api/v1/classes$";

const UPDATE_CLASS_API_KEY = "^PATCH_/api/v1/classes/[0-9]+$";

const CREATE_DOCUMENTS_ON_CLASSES_API_KEY =
  "^POST_/api/v1/documents-on-classes$";

const REQUEST_USER_KEY = "user";

const FILE_UPLOAD_MAX_COUNT = 5;

module.exports = {
  LOGIN_API_KEY,
  CREATE_USER_API_KEY,
  CREATE_CLASS_API_KEY,
  UPDATE_CLASS_API_KEY,
  CREATE_DOCUMENTS_ON_CLASSES_API_KEY,
  REQUEST_USER_KEY,
  FILE_UPLOAD_MAX_COUNT,
};
