import { ERROR_ORDER, INIT_ORDER, CALCULATE_ORDER } from "../types.d";
import { urls } from "../../utils/urls";
import axios from "axios";

export const getPrice = (symbol: string) => (dispatch: any) => {
  dispatch({ type: INIT_ORDER, fees: 1.055 });
  axios
    .get(`${urls.binanceV3}ticker/price?symbol=${symbol}`)
    .then((res: { data: { symbol: string; price: string } }) => {
      dispatch({
        type: CALCULATE_ORDER,
        symbol: res.data.symbol,
        price: res.data.price,
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