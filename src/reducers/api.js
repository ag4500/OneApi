import {
  Book_Data,
  Movie_Data,
  Movie_Quote_Data,
  Characters,
  Select_FieldName,
  Sorting_Field,
  Set_Filter,
  Set_Movie_Filters,
} from "../actions/index";
const initialState = {
  book: [],
  movie: [],
  quote: [],
  character: [],
  select: "name",
  
  sort: "asc",
  filters: { page: 1, limit: 10 },
  movieFilter: { budgetInMillions: "", runtimeInMinutes:"" },
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
    case Set_Filter:
      return {
        ...state,
        filters: action.payload,
      };
    case Set_Movie_Filters:
     
      return {
        ...state,
        movieFilter: action.payload,
      };

    default:
      return state;
  }
}
