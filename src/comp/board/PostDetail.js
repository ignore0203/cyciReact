// src/comp/board/PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { boartFind, boartRemove, boartGood } from '../api/Item'

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  // Load the post details based on the post ID from localStorage
  useEffect(() => {

    resot();

    // setPost();
  }, [id]);

  function resot() {
    let obj = new Object();
    obj.boardId = id

    const result = boartFind(obj);

    result.then(res => {
      console.log(res);
      setPost(res.data.data);
    })
  }

  // Handle Delete
  const handleDelete = () => {
    let obj = new Object();
    obj.boardId = id

    const result = boartRemove(obj)

    result.then(res => {
      navigate('/bulletin-board'); // Navigate back to the list
    })

    
  };

  const good = () => {
    let obj = new Object();
    obj.boardId = id

    const result = boartGood(obj)

    result.then(res => {
      resot();
    })
  }

  // Handle Delete
  const returnlist = () => {
      navigate('/bulletin-board'); // Navigate back to the list

    
  };

  // If the post is not found, show a loading message
  if (!post) return <p>Loading...</p>;

  return (
    <div>
      
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.boardGood}</p>

      <button onClick={returnlist}>list</button>
      {/* Edit and Delete buttons */}
      <button onClick={good}>Good</button>
{
      post.memberId === "hong"
        ? <>
        <button onClick={() => navigate(`/edit-post/${id}`)}>수정</button>

      <button onClick={handleDelete}>삭제</button></>
        : null
      }
      
    </div>
  );
};

export default PostDetail;


