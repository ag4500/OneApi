import SelectFieldName from "./select";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { requestBookAPI } from "./thunks/bookapi";
import { useEffect } from "react";
import SelectPagination from "./selectPage";
const Book = () => {
  const dispatch = useDispatch();
  const bookDetail = useSelector((state) => state.apiData);
  useEffect(() => {
    dispatch(
      requestBookAPI(bookDetail.select, bookDetail.sort, bookDetail.filters)
    );
  }, [bookDetail.sort]);
  return (
    <div className="container">
      <SelectFieldName />
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {bookDetail.book.docs == undefined
            ? "Loading...."
            : bookDetail.book.docs.map((data) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                </tr>
              ))}
        </tbody>
      </Table>
      <SelectPagination />
    </div>
  );
};
export default Book;
