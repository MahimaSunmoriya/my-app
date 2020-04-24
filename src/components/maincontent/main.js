import React,{useState,useEffect} from 'react';
import './style.css';
import blogPost from '../../data/blog.json';
import {NavLink} from 'react-router-dom';

const Main=(props)=>{

 const[posts,setPosts]=useState([]);

  useEffect(()=>{
    const posts = blogPost.data;
    setPosts(posts);
  },[posts]);

  return (
    <div className="row">
    <main>
    {
      posts.map(post=>{
        return(

            <div className="row">
            <img className="imageicon" src={require(`../../Images/${post.blogImage}`)} alt="fall" />
              <div className="blogheader">
              <NavLink key={post.id} to={`/post/${post.id}`}>
                <h1 className="posttitle">{post.blogTitle}<br/></h1>
                </NavLink>
                <div>
                <p>{post.blogText}<br/></p>
               
              </div>
              </div>
              <span id="date">{post.postedOn}</span>
            </div>

            );
      })
    }
    </main>

    </div>
      );
}

export default Main;
