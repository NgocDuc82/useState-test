// import React, { Component } from 'react';
import imgContent from './assets/img/content1.jpg';
import logo from './assets/img/anh-logo.jpg';         
import iconLike from './assets/img/like - fb.svg'                              
import iconTym from './assets/img/tym - fb.svg' 
import React , {useState} from 'react' ;
import PostComment from './PostComment';
function Post() {
  
  const [count,setCount] = useState(0)
  const [post, setPost] = useState({
    author: '',
    content:'', 
    title : '',
    img :'',
    index: count 
  }) 
  const [listPost, setListPost] = useState([]);
  const [isEdit,setIsEdit] = useState(false)
  const [isCommentShow,setIsCommentShow] = useState(false)
  const onChange= (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setPost({...post, [name]: value});  // ...post : giữ nguyên ban đầu có  và thêm name : value
  }
  const submit = () => {
    if(!isEdit){
      const amount = count + 1 ;
      setCount(amount);
      setPost({
        author: '',
        content:'',
        title : '',
        img :'',
        comment:'',
        index: amount
      });
      setListPost([...listPost, post]);
      
    } else {
      console.log(post.index)
      listPost.find((arr,i) => {
        if(i == post.index) {
          listPost[i] = post;
        }
      })
      setListPost([...listPost])
      setPost({
        author: '',
        content:'',
        title : '',
        img :'',
        comment:'',
      });
      setIsEdit(false);
    }
  }
  const Edit = (p) => {
    setIsEdit(true);
    setPost(p);
  }

  const toggleComment = () => {
    isCommentShow ? setIsCommentShow(false) : setIsCommentShow(true);
  }

  const like = (index) =>{
    console.log(listPost[index]);
    listPost[index].like = !listPost[index].like
    setListPost([...listPost])
  }
  // comment 

  const funcCallBack = () => {
    console.log("fis");
  }
return(
      <div className="container-fluid">
              <div className="row">
                  <div className="col-3" style={{ height : '100vh' , position : 'relative'}}>
                      <div className="add" >
                          <div className="add-name">
                              <label for="">Tác Giả :</label>
                              <input
                                name="author"
                                value={post.author ?? ""}    // bên nào có giá trị thì lấy 
                                onChange= {e => onChange(e)} 
                              />
                          </div>
                          <div className="add-title">
                              <label for="">Đề Mục:</label>

                              <input
                                name="title"
                                value={post.title ?? ""}
                                onChange={e => onChange(e)}
                              />
                          </div>
                          <div className="add-content">
                              <label for="">Nội Dung:</label> 
                              <input
                                name="content"
                                value={post.content ?? ""}
                                onChange={e => onChange(e)}
                              />
                          </div>
                          <button className="btn-submit" onClick={(e) => submit()}>{isEdit ? "Sửa" : "Thêm"}</button> 
                      </div>
                  </div>
                  {
                    listPost.map((p,index) => {
                          return(
                            <>
                              <div className = "col-5"  >
                                <div className = "post-header">
                                    <div className="post-header-right">
                                        <div className = "post-logo">
                                            <img src={logo} alt=""/>
                                        </div>
                                        <div className = "post-logo-time">
                                            <div className = "post-name">
                                                <p>{p.author}</p>
                                            </div>
                                            <div className = "post-time">
                                                <span>10h <i className="fa-solid fa-earth-asia"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-header-menu">
                                        <button className="" onClick={(e) => Edit(p)} >Sửa</button>
                                    </div>
                                </div>
                                <div className = "post-content">
                                    <strong className = "post-content-title">{p.title}</strong>
                                    <p className = "post-content-text" >{p.content}</p>
                                    <img className = "post-content-img" src = {imgContent}/>
                                </div>
                                <div className = "post-footer">
                                    <div className = "post-footer-top">
                                        <div className = "post-footer-top-reaction">
                                                <div  className="post-footer-top-reaction-like">
                                                    <img src={iconLike} alt=""/>
                                                </div>
                                                <div className="post-footer-top-reaction-tym">
                                                    <img src={iconTym} alt=""/>
                                                </div>
                                                <div className="post-footer-top-reaction-numberOfReaction">
                                                    <span className = "post-footer-top-numberOfReaction"> 1,4k</span>
                                                </div>
                                        </div>
                                        <div className = "post-footer-top-comment-share">
                                            <div className = "post-footer-top-comment">
                                                <span>49 Bình Luận</span>
                                            </div>
                                            <div className = "post-footer-top-share">
                                                <span>11 lượt chia sẻ</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "post-footer-bottom">
                                        <div className = "post-footer-bottom-like" style={{color: p.like ? '#196fbf' :''}} >
                                            <i className="fa-solid fa-thumbs-up"></i>
                                            <button style={{color: p.like ? '#196fbf' :''}}  onClick={(e) => like(index)}>like</button>
                                        </div>
                                        <div className = "post-footer-bottom-comment">
                                            <i className="fa-regular fa-message"></i>
                                            <button onClick={(e) => toggleComment(index)}>Bình Luận</button>
                                        </div>
                                        <div className = "post-footer-bottom-share">
                                            <i className="fa-solid fa-share"></i>
                                            <span> share </span>
                                        </div>
                                    </div>
                                </div>
                                {
                                  isCommentShow ? <PostComment comment="author1" count={count} funcCallBack={funcCallBack} /> : <div></div>
                                }
                                
                              </div>
                            </>
                          )
                    })
                  }
                  
                <div className="col-4"></div>
                </div>
      </div>
        )
  
}

export default Post;        