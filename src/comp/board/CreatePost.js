import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {boartRegist} from '../api/Item'

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      memberId: 'hong', // Unique ID for the post
      title: title,
      content : content
    };

    boartRegist(newPost);

    navigate('/bulletin-board');
  };

  return (
    <div>
      <h2>글 쓰기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="글 제목을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="글 내용을 입력하세요"
          />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default CreatePost;


