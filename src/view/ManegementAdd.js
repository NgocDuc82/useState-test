import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  InputGroup,
  ButtonDropdown,
  Input,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

function ManegementAdd() {
  // Modal open state
  const [modal, setModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // count the number of
  const [count, setCount] = useState(1);
  // Toggle for Modal
  const toggle = () => setModal(!modal);
  //
  const [post, setPost] = useState({
    product: "",
    quantity: "",
    unit: "",
    price: "",
    index: count,
  });
  const [listPost, setListPost] = useState([]);
  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setPost({ ...post, [name]: value });
  };
  const Add = () => {
    setListPost([...listPost, post]);
    const amount = count + 1;
    setCount(amount);
    setPost({
      product: "",
      quantity: "",
      unit: "",
      price: "",
      index: amount,
    });
    console.log(amount);
    // console.log(listPost);
    toggle();
  };

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
            <Modal id="Modal-AddNew" isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Thêm Sản Phẩm</ModalHeader>
              <ModalBody>
                <div className="ModalBody-wrap">
                  <InputGroup className="input-AddName input-group">
                    <Input
                      placeholder="Tên Sản Phẩm"
                      name="product"
                      value={post.product}
                      onChange={(e) => onChange(e)}
                    />
                  </InputGroup>
                  <div class="input-group mb-3">
                    <select class="form-select" id="inputGroupSelect01">                 }
                      <option selected>Chọn đơn vị</option>
                      <option value="1">Kg</option>
                      <option value="2">Hộp</option>
                      <option value="3">Lọ</option>
                    </select>
                  </div>
                  <InputGroup>
                    <Input
                      placeholder="Nhập số lượng"
                      name="unit"
                      value={post.unit}
                      onChange={(e) => onChange(e)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Input
                      placeholder="Nhập giá tiền"
                      name="price"
                      value={post.price}
                      onChange={(e) => onChange(e)}
                    />
                  </InputGroup>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button id="btn-Add" onClick={Add}>
                  ADD
                </Button>{" "}
                <Button onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
          {/* form addNew end */}
          <div className="content-tableAdd">
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
                        <th scope="row">{p.index}</th>
                        <td>{p.product}</td>
                        <td>{p.quantity}</td>
                        <td>{p.unit}</td>
                        <td>{p.price}</td>
                        <td>
                          <i className="fas fa-edit fa-lg btn-edit"></i>
                          <i className="fas fa-trash fa-lg btn-delete"></i>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManegementAdd;
