import axios from "axios";

import config from "./config";

export const waAPI = axios.create({
  baseURL: `https://graph.facebook.com/v16.0/${config.wa.phone}/messages`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${config.wa.token}`,
  },
});
