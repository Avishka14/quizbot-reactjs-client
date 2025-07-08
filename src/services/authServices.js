import API from "./api";

/**
 * @param {string} email -
 * @param {string} password
 * @returns {Promise}
 */

export const loginUser = async (email, password) => {
  return await API.post("/users/login", { email, password });
};

/**
 *
 * @param{Object} userData
 * @returns {Promise}
 *
 */

export const createUser = async (userData) => {
  return await API.post("/users/createuser", userData);
};



/**
 * @param {string} topic
 * @param {string} userid
 * @returns {Promise}
 */
export const getQuiz = async (topic, userid) => {
  return await API.post("/quiz/getquiz", { topic, userid });
};