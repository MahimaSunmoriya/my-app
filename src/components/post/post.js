import React,{useState,useEffect} from 'react';
import './style.css';
import blogPost from '../../data/blog.json';

const Post=(props)=>{

  const[post,setPost]=useState({
            id:"",
        blogTitle :"",
        postedOn:"",
        blogImage:"",
        blogText:""});
const[postId,setPostId]=useState('');

  useEffect(()=>{
    const postId=props.match.params.postId;
    const post=blogPost.data.find(post=>post.id==postId);
    setPost(post);
    setPostId(postId)
  },[post,props.match.params.postId]);

  if(post.blogImage=="") return null;

    return (
    <div className="rowPost">
    <main>
    <h1>{post.blogTitle}</h1>
    <img src={require(`../../Images/${post.blogImage}`)} alt="Flowers" />
    <span ><br/>{post.blogText}<br/></span>
    </main>

    </div>
          )

}
export default Post;
