import { Avatar } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import './PostBox.css';
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../context/StateProvider';
import db from '../../firebase';
import firebase from 'firebase/compat/app';

function PostBox() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput('');
        setImageUrl('');
    }

  return <div className='post-box'>
    <div className="post-box-top">
        <Avatar src={user.photoURL} />
        <form action="">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="post-message-input" placeholder={`What's on your mind, ${user.displayName} ?`} />

            <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='image URL (optional)' />

            <button onClick={handleSubmit} type="submit">Hidden Submit</button>
        </form>
    </div>

    <div className="post-box-bottom">
        <div className="post-option">
            <VideocamIcon style={{ color: "red" }}/>
            <h3>Live Video</h3>
        </div>
        <div className="post-option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
        </div>
        <div className="post-option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
        </div>
    </div>
  </div>;
}

export default PostBox;
