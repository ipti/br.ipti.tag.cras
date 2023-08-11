import axios from "axios";

// require('dotenv').config();

const http = axios.create({
  baseURL: "http://localhost:3000/",
});
export default http;