import React from 'react'
import '../components/SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import { Tooltip } from '@material-ui/core'
import ChannelRow from '../components/ChannelRow.js';

function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPage__filter'>
				<Tooltip title='Open search filters'>
				<TuneOutlinedIcon/>
				</Tooltip>
				<h2>FILTER</h2>
			</div>
			<hr/>
			<ChannelRow
			Channel='Arpan Neupane'
			image='/me.jpg'
			verified='/verified.png'
			subs='167M subscribers'
			numOfVideos='3 videos'
			description='This is a YouTube clone created in React.js
			I followed this tutorial for creating the header and sidebar: https://www.youtube.com/watch?v=NT299zIk2JY&t=10099s
			'
			/>
			<hr />

		</div>
	)
}

export default SearchPage