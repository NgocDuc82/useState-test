import React, { useState } from 'react';
import { Table } from 'reactstrap' ;
function TableAdd(props) {
    const {listPost} = props;
    const [isEdit,setIsEdit] = useState(false);
    const onClickEdit = () => {
       setIsEdit(true);
    }
    return(
        <>
            <Table bordered hover borderless>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name of Product</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              {listPost.map((p, index) => {
                return (
                  <>
                    <tbody>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{p.product}</td>
                        <td>{p.quantity}</td>
                        <td>{p.unit}</td>
                        <td>{p.price}</td>
                        <td>
                          <button onClick={onClickEdit(p)} className="btn-edit">
                            <i className="fas fa-edit fa-lg"></i>
                          </button>
                          <button className="btn-delete">
                            <i className="fas fa-trash fa-lg"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </Table>
        </>
    )
}
export default TableAdd;