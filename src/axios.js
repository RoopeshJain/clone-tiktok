import axios from "axios";

const instance = axios.create({
  baseURL: "https://dtechies-tiktok-backend-9b6f8.web.app/",
});

export default instance;
