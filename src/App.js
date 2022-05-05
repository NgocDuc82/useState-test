
import './App.css';
import React , {useState} from 'react' ;
function App() {
  const [count,setCount] = useState(0)
  const [post, setPost] = useState({
    author: '',
    content:'', 
    title : '',
    img :'',
    comment:'',
    index: count 
  }) 

  const [listPost, setListPost] = useState([]);
  const [isEdit,setIsEdit] = useState(false)

  const onChange= (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setPost({...post, [name]: value});  // ...post : giữ nguyên ban đầu có  và thêm name : value
  }
  const submit = () => {
    if(!isEdit){
      console.log(post)
      console.log(listPost)
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
      // console.log(post)
      setListPost([...listPost, post]);
      
    } else {
      console.log(post.index)
      listPost.find((arr,i) => {
        // console.log(i)
        if(i == post.index) {
          listPost[i] = post;
        }
      })
      setListPost([...listPost])
      setIsEdit(false);    
    }
   
  }
  const Edit = (p) => {
    setIsEdit(true);
    setPost(p);
  }

  const like = (index) =>{
    listPost[index].like = !listPost[index].like
    setListPost([...listPost])
  }

  return (
    <div className="App">
      <div className="App">
            <div>
              tác giả :
              <input
                name="author"
                value={post.author ?? ""}    // bên nào có giá trị thì lấy 
                onChange= {e => onChange(e)}
              />
            </div>
            <div>
              nội dung : 
              <input
                name="content"
                value={post.content ?? ""}
                onChange={e => onChange(e)}
              />
            </div>
            <div>
              title : 
              <input
                name="title"
                value={post.title ?? ""}
                onChange={e => onChange(e)}
              />
            </div>
            <div>
              img : 
              <input
                name="img"
                value={post.img ?? ""}
                onChange={e => onChange(e)}
              />
            </div>
            <div>
              comment : 
              <input
                name="comment"
                value={post.comment ?? ""}
                onChange={e => onChange(e)}
              />
            </div>
            <button class="submit" onClick={(e) => submit(
            )}>{isEdit ? "Sửa" : "Thêm"}</button>-  
          <div className="form">
            <div className="Name">
                {
                  listPost.map((p,index) => {
                    return(
                      <>
                        <div className="form-Name">
                          <span># {index}</span>
                          <p>{p.author}</p>
                          <p>{p.content}</p>
                          <p>{p.title}</p>
                          <p>{p.img}</p>
                          <p>{p.comment}</p>
                          <button style={{background: p.like ? 'red' :''}} onClick={(e) => like(index)} >like</button>
                          <button onClick={(e) => Edit(p)} >Sửa </button>
                        </div>
                      </>
                    )
                  })
                }
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;