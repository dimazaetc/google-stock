import { GET_ALL_TIKERS, GET_TICKERS_LOADER } from "../const";
const initialState = {
  tickers: [],
  isLoading: true,
  FETCH_INTERVAL: [],
};

export const tikersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TIKERS:
      return {
        ...state,
        tickers: payload,
        isLoading: false,
      };
    case GET_TICKERS_LOADER:
      return {
        ...state,
        isLoading: payload.isLoading,
      };

    default:
      return state;
  }
};
