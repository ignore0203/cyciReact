// src/comp/board/EditPost.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { boartFind, boartModify  } from '../api/Item'

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  // Load the post details based on the ID
  useEffect(() => {
    let obj = new Object();
    obj.boardId = id

    const result = boartFind(obj)

    result.then(res => {
      setTitle(res.data.data.title);
      setContent(res.data.data.content);
    })
  }, [id]);

  // Handle form submission and update the post
  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = new Object();
    obj.boardId = id;
    obj.title = title;
    obj.content = content;
    obj.memberId = "hong";

    const result = boartModify(obj);
    result.then(res => {
      console.log(res);
      navigate(`/post/${id}`);
    })
  };

  return (
    <div>
      <h2>수정</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default EditPost;


