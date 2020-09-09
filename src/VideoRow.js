import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './VideoRow.css';

function VideoRow({image, verified, channel, title, timestamp, desc, views}) {
  return (
    <div className='VideoRow'>
      <img src={image} alt={title}/>
      <div className='VideoRow-text'>
        <h3>{title}</h3>
        <p className='VideoRow-headline'>{channel}<span className='VideoRow-tickIcon'>{verified && <CheckCircleIcon />}</span>  {views}  <span>&#8226;</span>  {timestamp}</p>
        <p className='VideoRow-desc'>{desc}</p>
      </div>
    </div>
  );
}

export default VideoRow
