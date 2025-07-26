import API from "./api";

/**
 * @param {string} email -
 * @param {string} password
 * @returns {Promise}
 */

export const loginUser = (email, password) => {
  return  API.post("/users/login", { email, password });
};

/**
 *
 * @param{Object} userData
 * @returns {Promise}
 *
 */

export const createUser =  (userData) => {
  return  API.post("/users/createuser", userData);
};



/**
 * @param {string} topic
 * @param {string} userid
 * @returns {Promise}
 */
export const getQuiz =  (topic, userid) => {
  return  API.post("/quiz/getquiz", { topic, userid });
};

/**
 * @param {string} topic
 * @param {string} userid
 * @returns {Promise}
 */
export const getDescribe =  (topic, userId) => {
  return  API.post("/describe/getdescribe", { topic, userId });
};

/**
 *
 * @returns {Promise}
 *
 */

export const getAllBlogs = () =>{
      return API.get("/blog/getall");
};