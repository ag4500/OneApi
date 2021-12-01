import { requestCharacterApi } from "./thunks/bookapi";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SelectFieldName from "./select";
import SelectPagination from "./selectPage";
const Character = () => {
  const dispatch = useDispatch();
  const characterDetail = useSelector((state) => state.apiData);
  useEffect(() => {
    dispatch(
      requestCharacterApi(
        characterDetail.select,
        characterDetail.sort,
        characterDetail.filters
      )
    );
  }, [characterDetail.sort, characterDetail.filters]);
  return (
    <>
      <SelectFieldName />
      <Table className="container" striped bordered hover size="lg">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth</th>
            <th>Race</th>
          </tr>
        </thead>
        <tbody>
          {characterDetail.character.docs == undefined
            ? "Loading...."
            : characterDetail.character.docs.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.gender}</td>
                  <td>{data.birth}</td>
                  <td>{data.race}</td>
                </tr>
              ))}
        </tbody>
      </Table>
      <SelectPagination/>
    </>
  );
};
export default Character;
