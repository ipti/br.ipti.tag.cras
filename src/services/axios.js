import axios from "axios";
import { getToken } from "./localstorage";

// require('dotenv').config();

const http = axios.create({
  //baseURL: "https://api-cras.tag.ong.br/",
  baseURL: "http://localhost:3001/",
});

http.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;
