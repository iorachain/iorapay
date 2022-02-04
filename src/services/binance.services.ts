import http from "../utils/http-common";
import PRICES_CYRRENCIES from "./binance.types";

class BinanceDataServices {
  get(SYMBOL: string) {
    return http.get<PRICES_CYRRENCIES>(`/api/v3/ticker/price?symbol=${SYMBOL}`);
  }
}

export default new BinanceDataServices();
