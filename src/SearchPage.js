import React from 'react';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='SearchPage'>
      <div className='SearchPage-filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow 
        image='https://yt3.ggpht.com/a/AATXAJwD5przHJrEGq1AUK_f7djvnryZE4m5JhUZB7w1jg=s176-c-k-c0x00ffffff-no-rj-mo'
        channel='Shroud'
        verified
        subs='6.53M'
        numVideos={950}
        desc='Hey there! Welcome to my channel. This is where my highlights get posted from my stream! Channel Management ...'
      />

      <hr />

      <h3 id='videosHeading'>Latest from Shroud</h3>  
      <VideoRow 
        image='https://i.ytimg.com/an_webp/gMOqohTAXVo/mqdefault_6s.webp?du=3000&sqp=CPjR4foF&rs=AOn4CLCHcSjH1PuYSc8bLe8sKS_c_tcBGQ'
        title='FINDING CHEATERS IN DAYZ'
        channel='Shroud'
        verified
        timestamp='9 hours ago'
        views='65K'
        desc='All highlights are from my stream :D ▻ Follow me! TWITTER → https://twitter.com/shroud TWITCH → https://x.load.gg/shroudAYC ...'
      />
      <VideoRow 
        image='https://i.ytimg.com/an_webp/BrPNOV7Qn5w/mqdefault_6s.webp?du=3000&sqp=CNzG4foF&rs=AOn4CLB8kWzwYuWmjf3ywWLcxXwEIcOqTA'
        title='TROLLING PLAYERS IN DAYZ'
        channel='Shroud'
        verified
        timestamp='1 day ago'
        views='254K'
        desc='All highlights are from my stream :D ▻ Follow me! TWITTER → https://twitter.com/shroud TWITCH → https://x.load.gg/shroudAYC ...'
      />
      <VideoRow 
        image='https://i.ytimg.com/an_webp/Iq_Hx0WcLRk/mqdefault_6s.webp?du=3000&sqp=CKDI4foF&rs=AOn4CLCooY_NAK4l6Xgi8Ji3vbaOdIWF5g'
        title='SHROUD AND TIM WARZONE ADVENTURES'
        channel='Shroud'
        verified
        timestamp='3 days ago'
        views='475K'
        desc='All highlights are from my stream :D ▻ Follow me! TWITTER → https://twitter.com/shroud TWITCH → https://x.load.gg/shroudAYC ...'
      />
      <VideoRow 
        image='https://i.ytimg.com/an_webp/5HGYlvQ9C8w/mqdefault_6s.webp?du=3000&sqp=CPDl4foF&rs=AOn4CLDjcEavU5GAU20QGlo-WNnE77_GOg'
        title='CHEATERS ARE RUNNING FALL GUYS!'
        channel='Shroud'
        verified
        timestamp='5 days ago'
        views='395K'
        desc='All highlights are from my stream :D ▻ Follow me! TWITTER → https://twitter.com/shroud TWITCH → https://x.load.gg/shroudAYC ...'
      />
    </div>
  );
}

export default SearchPage
