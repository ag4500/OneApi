import axios from "axios";
import {
  bookData,
  movieData,
  movieQuoteData,
  movieCharacters,
  setMovieFilters,
} from "../actions";

const client = axios.create({
  baseURL: "https://the-one-api.dev/v2",
});
client.defaults.headers.common["Authorization"] =
  "Bearer f2LyEryuMrCxJ8J7Quzn ";
export const requestBookAPI = (value, sort, filter) => async (dispatch) => {
  try {
    const params = {
      limit: filter.limit,
      page: filter.page,
      sort: `${value}:${sort}`,
    };
    const response = await client.get("/book", { params });
    dispatch(bookData(response.data));
  } catch (err) {
    alert(err);
  }
};
export const requestMovieAPI =
  (value, sort, filter, moviefilter) => async (dispatch) => {
    try {
      const { budgetInMillions, runtimeInMinutes } = moviefilter;
      const params = {
        limit: filter.limit,
        page: filter.page,
        sort: `${value}:${sort}`,
      };
      if (budgetInMillions != "") {
        const response = await client.get(
          `/movie?budgetInMillions<${budgetInMillions}`
        );
        dispatch(movieData(response.data));
      } else if (runtimeInMinutes != "") {
        const response = await client.get(
          `/movie?runtimeInMinutes<${runtimeInMinutes}`
        );
        dispatch(movieData(response.data));
      } else {
        const response = await client.get("/movie", { params });
        dispatch(movieData(response.data));
      }
    } catch (err) {
      alert(err);
    }
  };
export const requestMovieQuoteAPI =
  (id, value, sort, moviefilter) => async (dispatch) => {
    try {
      const params = {
        limit: moviefilter.limit,
        page: moviefilter.page,
        sort: `${value}:${sort}`,
      };
      console.log(moviefilter, params);
      const response = await client.get(`/movie/${id}/quote`, { params });
      dispatch(movieQuoteData(response.data));
    } catch (err) {
      alert(err);
    }
  };
export const requestCharacterApi =
  (value, sort, filter) => async (dispatch) => {
    try {
      const params = {
        limit: filter.limit,
        page: filter.page,
        sort: `${value}:${sort}`,
      };
      const response = await client.get("/character", { params });

      dispatch(movieCharacters(response.data));
    } catch (err) {
      alert(err);
    }
  };
