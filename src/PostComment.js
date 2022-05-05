import React, { useState } from "react";

import "./App.css";
import { render } from "@testing-library/react";
import logo from "./assets/img/anh-logo.jpg";

function PostComment(props) {
  const { comment, count, funcCallBack} = props;
  const [postComments, setPostComments] = useState({
    comment : '',
  });
  const [listPostComments, setListPostComments] = useState([]);
  const onChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setPostComments({...postComments,[name]:value})  
  }
  const sendComment = () => {
    setListPostComments([...listPostComments, postComments]);
    setPostComments({
      content: '',
    })
    funcCallBack();
  };  

  return (
    <>
      <div className="post-comment">
        <div className="post-comment-top">
          <div className="post-comment-top-checkFirst">
            xem <span>5</span> comment trước
          </div>
          <div className="post-comment-top-filterComment">
            Phù Hợp nhất <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="post-comment-content">
          {listPostComments.map((p) => {
            return (
              <>
                <div className="post-comment-content-wrap">
                  <div className="post-comment-content-left">
                    <img
                      className="post-comment-content-logo"
                      src={logo}
                      alt=""
                    />
                  </div>
                  <div className="post-comment-content-right">
                    <div className="post-comment-content-right-text">
                      <strong className="post-comment-right-name">
                        {comment}
                      </strong>
                      <p className="post-comment-right-text">{p.comment}</p>
                    </div>
                    <div className="post-comment-content-right-reaction">
                      <span className="post-comment-content-right-reaction-like">
                        Like
                      </span>
                      <span className="post-comment-content-right-reaction-reply">
                        Phản hồi
                      </span>
                      <span className="post-comment-content-right-reaction-time">
                        1 giờ
                      </span>
                    </div>
                  </div>
                </div>
                
              </>
            );
          })}

          <div className="post-input">
            <input 
              name = 'comment'
              value = {postComments.comment ?? ""}
              onChange={e => onChange(e)}
            />
            <button
              className="post-input-btn  btn btn-primary"
              onClick={(e) => sendComment()}
            >
              Gửi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostComment;
