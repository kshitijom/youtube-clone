import React, { useState } from 'react';
import logo from './YouTube_Logo_2017.svg';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='Header'>
      <div className='Header-left'>
        <MenuIcon />
        <Link to='/'>
          <img 
            className='Header-logo' 
            src={logo} 
            alt='YouTube Logo'
          />
        </Link>
      </div>

      <div className='Header-search'>
        <div className='Header-searchBar'> 
          <input 
            type='text' 
            value={inputSearch}
            placeholder='Search'
            onChange={e => setInputSearch(e.target.value)}
          />
          <Link className='Header-searchBtn' to={`/search/${inputSearch}`}>
            <button><i class="fas fa-search"></i></button>
          </Link>
        </div>
      </div>

      <div className='Header-icons'>
        <VideoCallSharpIcon className='Header-icon' />
        <AppsSharpIcon className='Header-icon' />
        <NotificationsSharpIcon className='Header-icon' />
        <Avatar 
          className='Header-avatar'
          alt='Kshitij Mishra'
          src='https://lh3.googleusercontent.com/-KoXAL91lzeo/XoWhWZUopnI/AAAAAAAAMkk/rQnCb2L701YaYTrAaPdlxkolSyLnGdn7wCEwYBhgLKtQDAL1Ocqy2FWOcILPkrKcYkSt25EfMuKOXyOeKWXk2PTaOOzrgtelSjovoCKhC7ZX6t0ERiZhWXlVvg2A_LbAey8i1_EJz9gNyvA2cCPwNxXSEUuMUSwryuWVXtcTPQfKpgnevop94gC3BfoXW5jlsJAQKayuJd0qw49RNeUIckX3rCnnq08TG4DJjFQnBeUACfF5K86zsYiyeccjU7yYLbpKnRoAufDBRmPuz7lPbVvhdD_aAgpneo4u78CxaQyqKAFedP3JiMMex46k5q-9-lr057jpO5LzCqq2TMCdoB3Z_bJ9gmKxFMZUh3mnNkri7GyIaKzHa6USI1x4N6Vng4A-nPmJ2x1jMtE_04kq0E7cnWDsGMPpx_Ze8-AV1Zgjl-stXX04_Siv1u-Gq8xo370wQE_tEOwxf_BAIBKiBB-BLQZVMzRNT_Osw6RkG0zRrX_wms24HBE-Wr03zAP0j-0CbTLoSrbi_OHIYcP5lt9Qm97rvYrkc3L1ZHOmdBDziqxZkCRdFLD7Nr9QkD_PvAEAxKoLQ10Jd9k7JHAlxBucOqqKdfMadnAz6FV4gZ0oVcxCAR3XFcq3K5zAKOlH1x3I7dLBi26vr8IvmDSqrY7KLdWaxMOPO3PoF/w139-h140-p/IMG_20191110_120136.jpg'
        />
      </div>
    </div>
  );
}

export default Header;
