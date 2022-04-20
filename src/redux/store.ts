import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducers";
import uiReducer from "./reducers/uiReducers";
import orderReducer from "./reducers/orderReducers";

const initialState = {};
const middleware = [thunk];

// Redux Devtool
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

// All Reducers
const reducer = combineReducers({
  user: userReducer,
  UI: uiReducer,
  order: orderReducer,
});

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) as any
  )
);
export default store;
