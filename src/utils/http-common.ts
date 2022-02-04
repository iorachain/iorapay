import axios from "axios";
import { URLS } from "./urls";

export default axios.create({
  baseURL: URLS.BINANCE_ENDPOINT,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "api-key": URLS.BINANCE_APIKEY,
    "secret-key": URLS.BINANCE_SECRET_KEY,
  },
});
