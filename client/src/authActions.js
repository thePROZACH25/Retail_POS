import axios from "axios";
import setAuthToken from "../src/utils/setAuthToken";
export const signUpUser = async (userData) => {
  try {
    const result = await axios.post("/api/employees/signup", userData);
    return result;
  } catch (err) {
    console.log(err);
  }
};
//Sign in - Get User Token
export const signInUser = async (userData) => {
  console.log("userData", userData)
  try {
    const res = await axios.post("/api/employees/signin", userData);
    console.log("userData 2", res)
    //save to localstorage
    const { token } = res.data;
    //set token to localStorage
    localStorage.setItem("jwtToken", token);
    //set token to auth header
    setAuthToken(token);
  } catch (err) {
    console.log(err)
  }
};
//Sign out user
export const signOutUser = () => {
  //remove token from localStorage
  localStorage.removeItem("jwtToken");
  //remove auth header for future requests
  setAuthToken(false);
  //set current user to {} which will set isAuthenticated to false
};