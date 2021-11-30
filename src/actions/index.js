export const Book_Data = "Book_Data";
export const Movie_Data = "Movie_Data";
export const Movie_Quote_Data = "Movie_Quote_Data";
export const Characters = "Characters";
export const Select_FieldName = "Select_FieldName";
export const Sorting_Field="Sorting_Field"

export const bookData = (payload) => ({
  type: Book_Data,
  payload,
});
export const movieData = (payload) => ({
  type: Movie_Data,
  payload,
});
export const movieQuoteData = (payload) => ({
  type: Movie_Quote_Data,
  payload,
});
export const movieCharacters = (payload) => ({
  type: Characters,
  payload,
});
export const selectFieldName = (payload) => ({
  type: Select_FieldName,
  payload,
});
export const sortingField = (payload) => ({
  type: Sorting_Field,
  payload,
});
