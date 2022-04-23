import { ERROR_ORDER, INIT_ORDER, CALCULATE_ORDER } from "../types.d";
import { Dispatch } from "redux";
import { URLS } from "../../utils/urls";
import axios from "axios";

export const getPrice =
  (symbol: string, qty?: number) => (dispatch: Dispatch) => {
    dispatch({ type: INIT_ORDER, fees: 1.055 });
    axios
      .get(`${URLS.BINANCE_V3}ticker/price?symbol=${symbol}`)
      .then((res: { data: { symbol: string; price: string } }) => {
        dispatch({
          type: CALCULATE_ORDER,
          symbol: res.data.symbol,
          price: res.data.price,
          initTimeStamp: Date.now(),
          qty: qty,
        });
      })
      .catch((err: { response: { data: object } }) => {
        console.log(err);
        dispatch({
          type: ERROR_ORDER,
          payload: err.response.data,
        });
      });
  };
