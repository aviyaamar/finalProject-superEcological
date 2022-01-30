import axios from "axios";

const userAuthApi = axios.create({
  baseURL: "http://localhost:5000/users/"
});

export default userAuthApi