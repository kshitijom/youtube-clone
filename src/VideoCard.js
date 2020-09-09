import React from 'react';
import './VideoCard.css';
import { Avatar } from '@material-ui/core';

function VideoCard({image, title, channel, views, timestamp, channelImg}) {
  return (
    <div className='VideoCard'> 
      <img 
        class='VideoCard-thumbnail'
        src={image}
        alt={title}
      />
      <div className='VideoCard-info'>
        <Avatar 
          className='VideoCard-avatar'
          alt={channel}
          src={channelImg}
        />
        <div className='VideoCard-text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} <span>&#8226;</span> {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
