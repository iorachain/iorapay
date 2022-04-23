import { timeStamp } from "console";
import {
  INIT_ORDER,
  CALCULATE_ORDER,
  CONFIRM_ORDER,
  EXECUTE_ORDER,
  FINISH_ORDER,
  ERROR_ORDER,
} from "../types.d";

const initialState = {
  from: "",
  typeFrom: "",
  to: 45783959000189,
  typeTo: "cnpj",
  symbol: "USDTBRL",
  price: "",
  fees: 1,
  qty: 1,
  errors: "",
  loading: false,
  initTimeStamp: 0,
  updateTimeStam: 0,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case INIT_ORDER:
      return {
        ...state,
        fees: action.fees,
        loading: true,
      };

    case CALCULATE_ORDER:
      return {
        ...state,
        loading: false,
        symbol: action.symbol,
        price: action.price,
        initTimeStamp: action.initTimeStamp,
        qty: action.qty,
      };
    case CONFIRM_ORDER:
      return {
        ...state,
        loading: false,
      };
    case EXECUTE_ORDER:
      return {
        ...state,
        loading: true,
      };
    case ERROR_ORDER:
      return {
        ...state,
        errors: action.payload,
      };
    case FINISH_ORDER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
