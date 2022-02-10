import React, { useEffect, useState } from 'react';
import "./Feed.css"
import Stories from './Stories';
import PostBox from './PostBox';
import Post from './Post';
import db from '../../firebase';

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
    .orderBy("timestamp", "desc").onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    });
  }, []);

  return <div className='feed'>
        <Stories />
        <PostBox />
        
        {posts.map(post => {
          return <Post 
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            username={post.data.username}
            timestamp={post.data.timestamp}
            image={post.data.image}
          />
        })}
  </div>;
}

export default Feed;
