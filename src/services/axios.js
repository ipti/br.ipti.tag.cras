import axios from "axios";

// require('dotenv').config();

const http = axios.create({
  baseURL: "https://tag-cras.azurewebsites.net/",
});
export default http;
