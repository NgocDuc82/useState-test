import React, { useState } from "react";
// import Axios from "axios" ;
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import TableAxios from "./TableAxios";
function View() {
  const [task, setTask] = useState({
    name: "",
    user_id: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [search, setSearch] = useState([]);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const Axios = require("axios");
  Axios.get("https://authencation.vercel.app/api/todo/list")
    .then(function (response) {
      setTaskList(response.data);
    })
    .catch(function (error) {});
  // add
  const handleClickAdd = (e) => {
    Axios.post("https://authencation.vercel.app/api/todo/create", task)
      .then(function () {
        setTask({
          name: "",
          user_id: "",
        });
      })
      .catch(function (error) {});
  };
  const handleClickEdit = (p, id) => {
    setIsEdit(true);
    setTask({ ...task, id: id });
    Axios.get(`https://authencation.vercel.app/api/todo/get?id=${id}`)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => console.log(err));
  };
  // update
  const handleClickUpdate = (e) => {
    Axios.post(
      `https://authencation.vercel.app/api/todo/update?id=${task.id}`,
      task
    )
      .then((res) => {
        setTask({
          name: "",
          user_id: "",
        });
        setIsEdit(false);
      })
      .catch((err) => console.log(err));
  };
  // delete
  const handleDelete = (id) => {
    Axios.post(`https://authencation.vercel.app/api/todo/delete?id=${id}`)
      .then(() => {})
      .catch((err) => console.log(err));
  };
  // search
  const handleClickSearch = () => {
  };
  const handleChangeSearch = (e) => {
    const value = e.target.value;
    let kq = [];
    setSearch({ ...search, value });
    // console.log(taskList)
    taskList.map((p) => {
      let str = p.name;
      if (str.includes(search.value)) {
        let iteamSearch = {
          id : p.id,
          name : p.name,
          user_id : p.user_id
        }
        kq.push(iteamSearch);
      } else {
        // console.log(false)
      }
    });
    // console.log(kq)
    setTaskList(...kq);
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
          {/* imput start */}

          <div>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  className="content-input"
                  name="name"
                  value={task.name}
                  placeholder="name"
                  onChange={(e) => handleChangeInput(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>user_id</Label>
                <Input
                  className="content-input"
                  name="user_id"
                  value={task.user_id}
                  placeholder="user_id"
                  onChange={(e) => handleChangeInput(e)}
                />
              </FormGroup>
            </Form>
          </div>

          {/* input end */}
          {/* form addNewew start */}
          <div className="content-add">
            {isEdit ? (
              <Button
                className="content-add-btn"
                onClick={(e) => handleClickUpdate(e)}
              >
                UPDATE
              </Button>
            ) : (
              <Button
                className="content-add-btn"
                onClick={(e) => handleClickAdd(e)}
              >
                ADD NEW
              </Button>
            )}
          </div>
          <div className="content-search">
            <InputGroup>
              <InputGroupText>
                <Button onClick={(e) => handleClickSearch(e)}>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Button>
              </InputGroupText>
              <Input
                className="content-input"
                placeholder="Search"
                onChange={(e) => handleChangeSearch(e)}
              />
            </InputGroup>
          </div>
          {/* form addNew end */}
          <div className="content-tableAdd">
            <TableAxios
              taskList={taskList}
              handleDelete={handleDelete}
              handleClickEdit={handleClickEdit}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              setTask={setTask}
              // handleClickEdit={handleClickEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
