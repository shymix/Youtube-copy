import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow.js';
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from "@material-ui/icons/History"
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";

function Sidebar() {
	return (
		<div className='sidebar'>
			<SidebarRow selected Icon={HomeIcon} title='Home' />
			<SidebarRow Icon={WhatshotIcon} title='Trending' />
			<SidebarRow Icon={SubscriptionsIcon} title='Subscriptions' />
			<hr />
			<SidebarRow Icon={VideoLibraryIcon} title='Library' />
			<SidebarRow Icon={HistoryIcon} title='History' />
			<SidebarRow Icon={OndemandVideoIcon} title='Your videos' />
			<SidebarRow Icon={WatchLaterIcon} title='Watch later' />
			<SidebarRow Icon={ThumbsUpIcon} title='Liked videos' />
			<hr />
			<p
			className='sidebar__subscription'
			>SUBSCRIPTIONS</p>
			 
		</div>
	)
}

export default Sidebar
