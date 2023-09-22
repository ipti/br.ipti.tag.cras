import axios from "axios";

// require('dotenv').config();

const http = axios.create({
  // baseURL: "https://tag-cras.azurewebsites.net/",
  baseURL: "http://localhost:3001/",
});
export default http;
