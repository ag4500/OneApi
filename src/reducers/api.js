import {
  Book_Data,
  Movie_Data,
  Movie_Quote_Data,
  Characters,
  Select_FieldName,
  Sorting_Field,
} from "../actions/index";
const initialState = {
  book: [],
  movie: [],
  quote: [],
  character: [],
  select: "",
  sort: "",
};
export default function apiData(state = initialState, action) {
  switch (action.type) {
    case Book_Data:
      return {
        ...state,
        book: action.payload,
      };
    case Movie_Data:
      return {
        ...state,
        movie: action.payload,
      };
    case Characters:
      return {
        ...state,
        character: action.payload,
      };
    case Movie_Quote_Data:
      return {
        ...state,
        quote: action.payload,
      };
    case Select_FieldName:
      return {
        ...state,
        select: action.payload,
      };
    case Sorting_Field:
      return {
        ...state,
        sort: action.payload,
      };

    default:
      return state;
  }
}
