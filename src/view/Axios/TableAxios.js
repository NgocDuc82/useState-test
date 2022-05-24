import { Table } from "reactstrap";
// import Axios from "axios";
function TableAxios(props) {
  // gán giá trị của post cần sửa lại modal
  // nút add thành nút edit
  // sửa và ghi lại giá trị
  const {taskList, handleDelete, handleClickEdit} = props;
  return (
    <>
      <Table bordered hover borderless>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>UserID</th>
            <th>Action</th>
          </tr>
        </thead>
        <>
          <tbody>
            {taskList.map((p, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    {/* <td></td> */}
                    <td>{p.user_id}</td>
                    <td>
                      <button className="btn-edit"
                      onClick={(e) => handleClickEdit(p,p.id)}>
                        <i className="fas fa-edit fa-lg"></i>
                      </button>
                      <button className="btn-delete"
                        onClick={(e) => handleDelete(p.id)}
                      >
                        <i className="fas fa-trash fa-lg"></i>
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </>
      </Table>
    </>
  );
}
export default TableAxios;
