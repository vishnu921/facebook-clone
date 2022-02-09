import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import RestoreIcon from '@material-ui/icons/Restore';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function SidebarItem({title, Icon, src}) {
  return <>
    <div className='sidebar-item'>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  </>;
}


function Sidebar() {
  return <div className='sidebar'>
    <SidebarItem src='https://scontent.fmaa8-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/122791992_1227445074304137_2418365104683547320_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=V4mJmEZv31EAX_t47KU&_nc_ht=scontent.fmaa8-1.fna&oh=00_AT-WDdUEGG_C4jcGr6fe6pURk7jRPhmhI-ZYdk0rSTMflg&oe=6228279C' title="Vishnu Amola"/>
    <SidebarItem Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
    <SidebarItem Icon={PeopleIcon} title="Friends"/>
    <SidebarItem Icon={StorefrontIcon} title="Marketplace"/>
    <SidebarItem Icon={VideoLibraryIcon} title="Watch"/>
    <SidebarItem Icon={RestoreIcon} title="Memories"/>
    <SidebarItem Icon={ExpandMoreOutlinedIcon} title="See More"/>
  </div>;
}

export default Sidebar;
