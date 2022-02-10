import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Stories.css"

function StoryItem({ image, profilePic, title }) {
    return <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),url(${image})`}} className='story-item'>
        <Avatar className='story-avatar' src={profilePic} />
        <h4>{title}</h4>
    </div>;
}

function Stories() {
  return <div className='stories'>
        <StoryItem 
            image="https://scontent.fmaa8-1.fna.fbcdn.net/v/t15.5256-10/s235x165/273715982_466206781666588_8960397218121726075_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=mKdJ11RMHtUAX9gMNw2&_nc_ht=scontent.fmaa8-1.fna&oh=00_AT_sMNiI9kb8RwLrRTe3DLBmKWD5ZB9O3JjakkxRO0D6Eg&oe=6207DED5"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBHyHdxC1Ha91JQ3kHfUv8ig2wm57Pp8lVg&usqp=CAU"
            title="Virat Kohli"
        />
        
        <StoryItem 
            image="https://scontent.fmaa8-1.fna.fbcdn.net/v/t15.5256-10/s235x165/273715982_466206781666588_8960397218121726075_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=mKdJ11RMHtUAX9gMNw2&_nc_ht=scontent.fmaa8-1.fna&oh=00_AT_sMNiI9kb8RwLrRTe3DLBmKWD5ZB9O3JjakkxRO0D6Eg&oe=6207DED5"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBHyHdxC1Ha91JQ3kHfUv8ig2wm57Pp8lVg&usqp=CAU"
            title="Virat Kohli"
        />
        
        <StoryItem 
            image="https://scontent.fmaa8-1.fna.fbcdn.net/v/t15.5256-10/s235x165/273715982_466206781666588_8960397218121726075_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=mKdJ11RMHtUAX9gMNw2&_nc_ht=scontent.fmaa8-1.fna&oh=00_AT_sMNiI9kb8RwLrRTe3DLBmKWD5ZB9O3JjakkxRO0D6Eg&oe=6207DED5"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBHyHdxC1Ha91JQ3kHfUv8ig2wm57Pp8lVg&usqp=CAU"
            title="Virat Kohli"
        />
        
        <StoryItem 
            image="https://scontent.fmaa8-1.fna.fbcdn.net/v/t15.5256-10/s235x165/273715982_466206781666588_8960397218121726075_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=mKdJ11RMHtUAX9gMNw2&_nc_ht=scontent.fmaa8-1.fna&oh=00_AT_sMNiI9kb8RwLrRTe3DLBmKWD5ZB9O3JjakkxRO0D6Eg&oe=6207DED5"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBHyHdxC1Ha91JQ3kHfUv8ig2wm57Pp8lVg&usqp=CAU"
            title="Virat Kohli"
        />
        
        <StoryItem 
            image="https://scontent.fmaa8-1.fna.fbcdn.net/v/t15.5256-10/s235x165/273715982_466206781666588_8960397218121726075_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=mKdJ11RMHtUAX9gMNw2&_nc_ht=scontent.fmaa8-1.fna&oh=00_AT_sMNiI9kb8RwLrRTe3DLBmKWD5ZB9O3JjakkxRO0D6Eg&oe=6207DED5"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBHyHdxC1Ha91JQ3kHfUv8ig2wm57Pp8lVg&usqp=CAU"
            title="Ishan Sinha"
        />
  </div>;
}

export default Stories;
