import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddNew from "../components/AddNew";
import TableAdd from "../components/TableAdd";
import { Button } from "reactstrap";

function ManegementAdd() {
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(0);
  const toggle = () => {
    setModal(!modal);
  };
  const [post, setPost] = useState({
    product: "",
    quantity: "",
    unit: "",
    price: "",
    index: count,
  });
  const [isEditOrAdd, setEditOrAdd] = useState(false);
  const [listPost, setListPost] = useState([]);
  const Add = (params) => {
    params.index = count;
    setCount(count + 1);
    setListPost([...listPost, params]);
    params = "";
    toggle();
  };
  const Edits = (params) => {
    var arr = listPost;
    arr.map((e, i) => {
      console.log(i, params.index);
      if (i == params.index) {
        arr[i] = params;
        // console.log('replace')
      }
    });
    setListPost([...arr]);
    setEditOrAdd(false);
    toggle();
  };
  // console.log(listPost);
  return (
    <>
      <div className="container-fluid full">
        <div className="header">
          <div className="header-logo">
            <i className="fa-regular fa-folder-open"></i>
            IS<span>SYSTEM</span>
          </div>
          <div className="header-center">
            <button className="header-manageMenu-btn">
              <i className="fa-solid fa-house-chimney"></i>
              <span>QL Thực Đơn</span>
            </button>
            <button className="header-manageImportExport-btn">
              <i className="fa-solid fa-chart-column"></i>
              <span>Xuất - Nhập</span>
            </button>
            <button className="header-setting">
              <i className="fa-solid fa-gear"></i>
              <span>Setting</span>
            </button>
          </div>
          <div className="header-logout">
            <strong>ADMIN</strong>
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>LOG OUT</span>
          </div>
        </div>
        <div className="container-fluid full content">
          <div className="content-title">
            <h1>MANEGEMENT</h1>
          </div>

          {/* form addNewew start */}
          <div className="content-add">
            <Button
              className="content-add-btn"
              id="btn"
              color="danger"
              onClick={toggle}
            >
              <i class="fa-solid fa-plus"></i>
              ADD NEW
            </Button>
            <AddNew
              toggle={toggle}
              count={count}
              modal={modal}
              Add={Add}
              Edits={Edits}
              isEditOrAdd={isEditOrAdd}
              setEditOrAdd={setEditOrAdd}
              setPost={setPost}
              post={post}
            />
          </div>
          {/* form addNew end */}
          <div className="content-tableAdd">
            <TableAdd
              listPost={listPost}
              Add={Add}
              toggle={toggle}
              Edits={Edits}
              isEditOrAdd={isEditOrAdd}
              setEditOrAdd={setEditOrAdd}
              setPost={setPost}
              post={post}
              setListPost={setListPost}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ManegementAdd;
