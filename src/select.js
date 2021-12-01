import { selectFieldName, sortingField } from "./actions";
import { useDispatch } from "react-redux";

const SelectFieldName = () => {
  const dispatch = useDispatch();
  const handleField = (e) => {
    dispatch(selectFieldName(e.target.value));
  };
  const handleSort = (e) => {
    dispatch(sortingField(e.target.value));
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <select
              name="Filter"
              className="form-select my-3"
              onChange={handleField}
            >
              <option>FieldName</option>
              <option value="name">Name</option>
              <option value="dialog">Dialog for moviequote</option>
            </select>
          </div>
          <div class="col-3">
            <select className="form-select my-3" onChange={handleSort}>
              <option>Sorting</option>
              <option value="asc">Ascending</option>
              <option value="desc">Desending</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectFieldName;
