import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {boartList} from '../api/Item'

const BulletinBoard = () => {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem('userId');

  // Load posts from localStorage when the component is mounted
  useEffect(() => {
    let obj = new Object;
    
    const list = boartList(obj)
    
    list
    .then(res => {

      console.log(res)

      setPosts(res.data.data)
    })
  }, []);

  return (
    <div>
      <h2>게시판</h2>

      <ul>
        {posts.map(post => (
          <li key={post.boardIdx}>
            <h3>
              <Link to={`/post/${post.boardIdx}`}>{post.title}</Link>
              <small>(작성자: {post.memberId})</small>
            </h3>
            {/* 추가적인 기능을 원하시면 삭제 버튼도 넣을 수 있습니다. */}
          </li>
        ))}
      </ul>

      <Link to="/create-post">
        <button>글 쓰기</button>
      </Link>
    </div>
  );
};

export default BulletinBoard;


