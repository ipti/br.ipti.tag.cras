import axios from "axios";
import { getToken } from "./localstorage";

// require('dotenv').config();

const http = axios.create({
  baseURL: "https://tag-cras.azurewebsites.net/",
});

http.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;
