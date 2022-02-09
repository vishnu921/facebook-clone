import React from 'react';
import "./Feed.css"
import Stories from './Stories';
import PostBox from './PostBox';

function Feed() {
  return <div className='feed'>
        <Stories />
        <PostBox />
  </div>;
}

export default Feed;
