import React, { useState } from "react";
import { Table } from "reactstrap";
function TableAdd(props) {
  const { listPost, setListPost,toggle, isEditOrAdd, setEditOrAdd, setPost } = props;

  // gán giá trị của post cần sửa lại modal
  // nút add thành nút edit
  // sửa và ghi lại giá trị

  const onClickEdit = (p) => {
    // hiện lên modle
    setEditOrAdd(true);
    toggle();
    setPost(p);
  };
  const onClickDelete = (p, index) => {
      listPost.find((arr, i) => {
        if(index === i){
            listPost.splice(i, 1);
        }
      })
      setListPost([...listPost])
      console.log(listPost)
  };
  return (
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
                  <th scope="row">{p.index + 1}</th>
                  <td>{p.product}</td>
                  <td>{p.quantity}</td>
                  <td>{p.unit}</td>
                  <td>{p.price}</td>
                  <td>
                    <button
                      onClick={(e) => onClickEdit(p, index)}
                      className="btn-edit"
                    >
                      <i className="fas fa-edit fa-lg"></i>
                    </button>
                    <button
                      className="btn-delete"
                      onClick={(e) => onClickDelete(p, index)}
                    >
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
  );
}
export default TableAdd;
