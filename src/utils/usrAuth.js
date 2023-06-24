import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//GET PROFILE DATA
export const getProfile = async () => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/auth/profile`, {
      withCredentials: true,
    });
    console.log(data);
    return data;
  } catch (err) {
    // If we are getting back 401 (Unauthorized) back from the server, means we need to log in
    if (err.response.status === 401) {
      //   console.log(err);
      return err.response.status;
    }
  }
};
