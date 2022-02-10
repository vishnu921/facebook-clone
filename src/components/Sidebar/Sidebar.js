import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import RestoreIcon from '@material-ui/icons/Restore';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from '../context/StateProvider';

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

  const [{ user }] = useStateValue();

  return <div className='sidebar'>
    <SidebarItem src={user.photoURL} title={user.displayName}/>
    <SidebarItem Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
    <SidebarItem Icon={PeopleIcon} title="Friends"/>
    <SidebarItem Icon={StorefrontIcon} title="Marketplace"/>
    <SidebarItem Icon={VideoLibraryIcon} title="Watch"/>
    <SidebarItem Icon={RestoreIcon} title="Memories"/>
    <SidebarItem Icon={ExpandMoreOutlinedIcon} title="See More"/>
  </div>;
}

export default Sidebar;
