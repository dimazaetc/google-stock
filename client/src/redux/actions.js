import { GET_ALL_TIKERS, GET_CART, GET_TICKERS_LOADER } from "./const";

import { socket } from "./GetSocket";

export const getToCart = (selectTicker) => ({
  type: GET_CART,
  payload: selectTicker,
});

export const getTickersLoader = () => ({
  type: GET_TICKERS_LOADER,
  payload: {
    isLoading: true,
  },
});

export const getTickersData = (tickersData) => ({
  type: GET_ALL_TIKERS,
  payload: { tickersData },
});

export const getTickers = () =>
  function (dispatch) {
    dispatch(getTickersLoader());
    socket.on("ticker", (response) => dispatch(getTickersData(response)));
  };
