import { setFilter } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
const SelectPagination = () => {
  const filterdata = useSelector((state) => state.apiData);
  const dispatch = useDispatch();
  const handlePage = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ ...filterdata.filters, [name]: value }));
  };
  const handlePageChange = (page) => {
    dispatch(
      setFilter({ ...filterdata.filters, page: page + filterdata.filters.page })
    );
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-2">
            <select
              className="form-select my-3"
              value={filterdata.filters.limit}
              onChange={handlePage}
              name="limit"
            >
              Select
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <Pagination>
              <Pagination.Prev
                disabled={filterdata.filters.page === 1}
                onClick={() => handlePageChange(-1)}
              />
              <Pagination.Item>{filterdata.filters.page}</Pagination.Item>
              <Pagination.Next
                disabled={filterdata.filters.page === filterdata.filters.pages}
                onClick={() => handlePageChange(1)}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectPagination;
