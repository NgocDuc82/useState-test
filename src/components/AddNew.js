// import React from 'react';
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
  FormGroup,
} from "reactstrap";

function AddNew(props) {
  const { toggle, modal, Add } = props;
  const [post, setPost] = useState({
    product: "",
    quantity: "",
    unit: "",
    price: "",
  });
  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setPost({ ...post, [name]: value });
  };
  const AddNew = () => {
    Add(post);
    setPost({
      product: "",
      quantity: "",
      unit: "",
      price: "",
    });
  };
  return (
    <div>
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
            <FormGroup className="input-group">
              <Input id="exampleSelect" 
              name="unit" 
              type="select"
              onChange={(e) => onChange(e)}
              >
                <option>Chọn Đơn Vị</option>
                <option>Kg</option>
                <option>Hộp</option>
                <option>Lọ</option>
                <option>Thùng</option>
              </Input>
            </FormGroup>
            <InputGroup>
              <Input
                placeholder="Nhập số lượng"
                name="quantity"
                value={post.quantity}
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
          <Button id="btn-Add" onClick={AddNew}>
            ADD
          </Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default AddNew;
