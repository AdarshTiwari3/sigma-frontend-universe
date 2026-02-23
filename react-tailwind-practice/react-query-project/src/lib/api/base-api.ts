import axios from "axios";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_APP_URL ?? "",
  timeout: 10000, // in miliseconds
  headers: {
    "Content-Type": "application/json",
  },
});
