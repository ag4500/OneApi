import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { requestMovieAPI} from "./thunks/bookapi";
import { useEffect } from "react";
import { useHistory } from "react-router";
import SelectFieldName from "./select";
const Movie = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetail = useSelector((state) => state.apiData);
  useEffect(() => {
    if (movieDetail.select == "" && movieDetail.sort == "") {
      dispatch(requestMovieAPI());
    } else {
      dispatch(requestMovieAPI(movieDetail.select, movieDetail.sort));
    }
  }, [movieDetail.sort]);

  const movieQuoteData = (id) => {
    history.push(`/movie/${id}/quote`);
  };
  return (
    <>
    <SelectFieldName/>
    <Table className="container" striped bordered hover size="lg">
      <thead>
        <tr>
          <th>Movie Name</th>
        </tr>
      </thead>
      <tbody>
        {movieDetail.movie.docs == undefined
          ? "Loading...."
          : movieDetail.movie.docs.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
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
    </>
  );
};
export default Movie;
