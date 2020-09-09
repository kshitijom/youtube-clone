import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './ChannelRow.css'

function ChannelRow({image, channel, verified, subs, numVideos, desc}) {
  return (
    <div className='ChannelRow'>
      <Avatar className='ChannelRow-logo' src={image} alt={channel}/>
      <div className='ChannelRow-text'>
        <h4>
          {channel} 
          {verified && <CheckCircleIcon />}
        </h4>
        <p>{subs} subscribers <span>&#8226;</span> {numVideos} videos</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ChannelRow
