import API from "./api";

/**
 * @param {string} email -
 * @param {string} password
 * @returns {Promise}
 */

export const loginUser = (email, password) => {
  return API.post("/users/login", { email, password });
};

/**
 *
 * @param{Object} userData
 * @returns {Promise}
 *
 */

export const createUser = (userData) => {
  return API.post("/users/createuser", userData);
};

/**
 * @param {string} topic
 * @returns {Promise}
 */
export const getQuiz = (topic , difficulty , questionCount) => {
  return API.post("/quiz/getquiz", { 
    topic ,
    difficulty,
    questionCount
 });
};

/**
 * @param {string} topic
 * @param {string} userid
 * @returns {Promise}
 */
export const getDescribe = (topic, userId) => {
  return API.post("/describe/getdescribe", { topic, userId });
};

/**
 *
 * @returns {Promise}
 *
 */

export const getAllBlogs = () => {
  return API.get("/blog/getall");
};

export const getUserByToken = () => {
  return API.get("/users/getbytoken", {
    withCredentials: true
  });
};



/**
 * Upload/Create a new blog
 * @param {FormData} formData - Blog data with image
 * @returns {Promise}
 */
export const uploadBlog = (formData) => {
  return API.post("/blog/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true
  });
};

export const getblogsbyTOken = () => {
  return API.get("/blog/getuserblogs", {
    withCredentials: true
  });
};

export const getNotApprovedBlogs = () => {
  return API.get("/blog/getnotapproved", {
    withCredentials: true
  });
};

export const approveBlog = (blogId) => {
  return API.put(`/blog/approve/${blogId}`, {}, {
    withCredentials: true
  });
}

export const declineBlog = (blogId) => {
  return API.put(`/blog/decline/${blogId}`, {}, {
    withCredentials: true
  });
}


/**
 * Submit answer for a quiz question
 * @param {string} quizId 
 * @param {string} userAnswer 
 * @returns {Promise}
 */
export const submitQuizAnswer = (quizId, userAnswer) => {
  return API.post(`/quiz/submit/${quizId}`, { userAnswer }, {
    withCredentials: true
  });
};


export const getQuizHistory = () =>{
  return API.get("/users/getquestions", {
    withCredentials: true
  });
}