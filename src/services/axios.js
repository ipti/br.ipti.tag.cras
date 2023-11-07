import axios from "axios";
import { getToken } from "./localstorage";

// require('dotenv').config();

const http = axios.create({
  baseURL: "http://api-cras.tag.ong.br/",
});

http.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;
