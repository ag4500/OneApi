import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { requestMovieAPI } from "./thunks/bookapi";
import { useEffect } from "react";
import { useHistory } from "react-router";
import SelectFieldName from "./select";
import SelectPagination from "./selectPage";
import { setMovieFilters } from "./actions";
const Movie = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetail = useSelector((state) => state.apiData);
  const filterChange = (e) => {
    dispatch(
      setMovieFilters({
        ...movieDetail.movieFilter,
        [e.target.name]: e.target.value,
      })
    );
  };
  useEffect(() => {
    dispatch(
      requestMovieAPI(
        movieDetail.select,
        movieDetail.sort,
        movieDetail.filters,
        movieDetail.movieFilter
      )
    );
  }, [movieDetail.sort, movieDetail.filters, movieDetail.movieFilter]);

  const movieQuoteData = (id) => {
    history.push(`/movie/${id}/quote`);
  };
  return (
    <>
      <SelectFieldName />

      <div className="container my-2">
        <input
          className="mx-2"
          type="search"
          name="budgetInMillions"
          value={movieDetail.movieFilter.budgetInMillions}
          onChange={(event) => filterChange(event)}
          placeholder="Search by budgetInMillions"
        />
        <input
          type="search"
          name="runtimeInMinutes"
          value={movieDetail.movieFilter.runtimeInMinutes}
          onChange={(event) => filterChange(event)}
          placeholder="Search by runtimeInMinutes"
        ></input>
      </div>

      <Table className="container" striped bordered hover size="lg">
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>BudgetInMillions</th>
            <th>RuntimeInMinutes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movieDetail.movie.docs == undefined
            ? "Loading...."
            : movieDetail.movie.docs.map((data) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.budgetInMillions}</td>
                  <td>{data.runtimeInMinutes}</td>
                  <Button
                    variant="outline-warning"
                    className="mx-1"
                    onClick={() => movieQuoteData(data._id)}
                  >
                    movie quotes
                  </Button>
                </tr>
              ))}
        </tbody>
      </Table>
      <SelectPagination />
    </>
  );
};
export default Movie;
