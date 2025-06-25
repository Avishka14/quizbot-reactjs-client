import API from "./api";

/**
 * Sends login credentials to the backend
 * 
 * @param {string} email - The user's email address
 * @param {string} password - The user's password
 * @returns {Promise} Axios response promise
 */
 export const loginUser = async (email , password) =>{
    return await API.post("/users/login" , {email , password});
 };