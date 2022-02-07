import React from 'react';
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return <div className='header'>
      <div className="header-left">
          <img src="/fb-logo.svg" alt="fb-logo"/>
          <div className="header-input">
              <SearchIcon />
              <input type="text" placeholder='Search Facebook'/>
          </div>
      </div>

      <div className="header-menu">
          <div className="header-item header-item--active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header-item flag-icon">
            <FlagIcon fontSize="large" />
          </div>
          <div className="header-item">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className="header-item">
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div className="header-item">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
          <div className="menu-icon">
            <MenuIcon fontSize="large" />
          </div>
      </div>
      
      <div className="header-right">
          <div className="header-info">
              <Avatar />
              <h4>Vishnu Amola</h4>
          </div>
          <IconButton>
              <AddIcon />
          </IconButton>
          <IconButton>
              <ForumIcon />
          </IconButton>
          <IconButton>
              <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
              <ExpandMoreIcon />
          </IconButton>
      </div>
  </div>;
}

export default Header;
