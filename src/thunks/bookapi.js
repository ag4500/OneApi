import axios from "axios";
import {
  bookData,
  movieData,
  movieQuoteData,
  movieCharacters,
} from "../actions";

const client = axios.create({
  baseURL: "https://the-one-api.dev/v2",
});
client.defaults.headers.common["Authorization"] =
  "Bearer api-key ";


export const requestBookAPI = (value, sort) => async (dispatch) => {
  try {
    if (value == undefined && sort == undefined) {
      const response = await client.get("/book");
      dispatch(bookData(response.data));
    } else {
      const response = await client.get(`/book?sort=${value}:${sort}`);
      dispatch(bookData(response.data));
    }
  } catch (err) {
    alert(err);
  }
};
export const requestMovieAPI = (value, sort) => async (dispatch) => {
  try {
    if (value == undefined && sort == undefined) {
      const response = await client.get("/movie");
      dispatch(movieData(response.data));
    } else {
      const response = await client.get(`/movie?sort=${value}:${sort}`);
      dispatch(movieData(response.data));
    }
  } catch (err) {
    alert(err);
  }
};
export const requestMovieQuoteAPI = (id, value, sort) => async (dispatch) => {
  try {
    if (value == undefined && sort == undefined) {
      const response = await client.get(`/movie/${id}/quote`);
      dispatch(movieQuoteData(response.data));
    } else {
      const response = await client.get(
        `/movie/${id}/quote?sort=${value}:${sort}`
      );
      dispatch(movieQuoteData(response.data));
    }
  } catch (err) {
    alert(err);
  }
};
export const requestCharacterApi = (select, sort) => async (dispatch) => {
  try {
    if (select == undefined && sort == undefined) {
      const response = await client.get("/character");
      dispatch(movieCharacters(response.data));
    } else {
      const response = await client.get(`/character?sort=${select}:${sort}`);
      dispatch(movieCharacters(response.data));
    }
  } catch (err) {
    alert(err);
  }
};
