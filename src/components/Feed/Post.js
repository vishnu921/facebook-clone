import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

function Post({profilePic, image, username, timestamp, message }) {
  return <div className='post'>
      <div className="post-top">
          <Avatar src={profilePic} className='post-avatar' />
          <div className="post-top-info">
              <h3>{username}</h3>
              <p>Time</p>
          </div>
      </div>

      <div className="post-body">
        <p>{message}</p>
      </div>

      <div className="post-image">
          <img src={image} alt="" />
      </div>

      <div className="react-options">
          <div className="react-option">
            <ThumbUpAltOutlinedIcon />
            <p>Like</p>
          </div>
          <div className="react-option">
            <ChatBubbleOutlineOutlinedIcon />
            <p>Comment</p>
          </div>
          <div className="react-option">
            <NearMeOutlinedIcon />
            <p>Share</p>
          </div>
      </div>
  </div>;
}

export default Post;
