import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { requestMovieQuoteAPI } from "./thunks/bookapi";
import { useEffect } from "react";
import SelectFieldName from "./select";
import SelectPagination from "./selectPage";
const MovieQuotes = (props) => {
  const dispatch = useDispatch();
  const quotesDetail = useSelector((state) => state.apiData);
  const { id } = props.match.params;
  useEffect(() => {
    dispatch(
      requestMovieQuoteAPI(
        id,
        quotesDetail.select,
        quotesDetail.sort,
        quotesDetail.filters
      )
    );
  }, [quotesDetail.sort, quotesDetail.filters]);

  return (
    <>
      <SelectFieldName />
      <Table className="container" striped bordered hover size="lg">
        <thead>
          <tr>
            <th>Quotes</th>
          </tr>
        </thead>
        <tbody>
          {quotesDetail.quote.docs == undefined
            ? "Loading...."
            : quotesDetail.quote.docs.length > 0
            ? quotesDetail.quote.docs.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.dialog}</td>
                </tr>
              ))
            : "No Quotes Available"}
        </tbody>
      </Table>
      <SelectPagination />
    </>
  );
};
export default MovieQuotes;
/*

*/
