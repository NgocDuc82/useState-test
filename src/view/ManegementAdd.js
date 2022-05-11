import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddNew from '../components/AddNew';
import TableAdd from '../components/TableAdd'
import {
  Button,
} from "reactstrap";

function ManegementAdd() {
  // Modal open state
  const [modal, setModal] = useState(false);

  // count the number of
  // const [count, setCount] = useState(1);
  // // Toggle for Modal
  const toggle = () => {
    setModal(!modal)
    // console.log("toggle")
    // setDropdownOpen(!dropdownOpen)
  };
  
  // //

  const [listPost, setListPost] = useState([]);

  const Add = (params) => {
    setListPost([...listPost, params]);
    // const amount = count + 1;
    // setCount(amount);
    params = '';
    // console.log(amount);
    // // console.log(listPost);
    toggle();
  // console.log(params)

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
              <AddNew toggle={toggle}  modal={modal}  Add={Add} />   
          </div>
          {/* form addNew end */}
          <div className="content-tableAdd">
            <TableAdd listPost={listPost} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ManegementAdd;
