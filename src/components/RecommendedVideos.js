import React from 'react'
import './RecommendedVideos.css'
import VideoCard from "./VideoCard.js";

function RecommendedVideos() {
	return (
		<div className='recommended'>
			<h2>Recommended</h2>

			<div className='recommended__videos'>
				<VideoCard
				className='recommended_video'
				title='Become a React.js developer in 2020'
				views='1.3M views'
				timestamp='1 day ago'
				channelImage="/me.jpg"
				channel='Arpan Neupane'
				image='/reactlogo.png'
				/>

				<VideoCard
				className='recommended_video'
				title='Why is Python popular?'
				views='2.8M views'
				timestamp='4 days ago'
				channelImage="/me.jpg"
				channel='Arpan Neupane'
				image='/python.png'
				/>
				<VideoCard
				className='recommended_video'
				title='YouTube Clone in React.js!!'
				views='12.8M views'
				timestamp='1 week ago'
				channelImage="/me.jpg"
				channel='Arpan Neupane'
				image='/youtubereact.png'/>
				<VideoCard
				className='recommended_video'
				title='MKBHD Setup Tour 2020'
				views='16.4M views'
				timestamp='3 weeks ago'
				channelImage="/mkbhdprof.jpg"
				channel='Marques Brownlee'
				image='/mkbhd.jpg'/>

				<VideoCard
				className='recommended_video'
				title='Become a React.js developer in 2020'
				views='1.3M views'
				timestamp='1 day ago'
				channelImage="/me.jpg"
				channel='Arpan Neupane'
				image='/reactlogo.png'
				/>

				<VideoCard
				className='recommended_video'
				title='Why is Python popular?'
				views='2.8M views'
				timestamp='4 days ago'
				channelImage="/me.jpg"
				channel='Arpan Neupane'
				image='/python.png'
				/>
				<VideoCard
				className='recommended_video'
				title='YouTube Clone in React.js!!'
				views='12.8M views'
				timestamp='1 week ago'
				channelImage="/me.jpg"
				channel='Arpan Neupane'
				image='/youtubereact.png'/>
				<VideoCard
				className='recommended_video'
				title='MKBHD Setup Tour 2020'
				views='16.4M views'
				timestamp='3 weeks ago'
				channelImage="/mkbhdprof.jpg"
				channel='Marques Brownlee'
				image='/mkbhd.jpg'/>

				<VideoCard
				className='recommended_video'
				title='Become a React.js developer in 2020'
				views='1.3M views'
				timestamp='1 day ago'
				channelImage="/me.jpg"
				channel='Arpan Neupane'
				image='/reactlogo.png'
				/>

				<VideoCard
				className='recommended_video'
				title='Why is Python popular?'
				views='2.8M views'
				timestamp='4 days ago'
				channelImage="/me.jpg"
				channel='Arpan Neupane'
				image='/python.png'
				/>
				<VideoCard
				className='recommended_video'
				title='YouTube Clone in React.js!!'
				views='12.8M views'
				timestamp='1 week ago'
				channelImage="/me.jpg"
				channel='Arpan Neupane'
				image='/youtubereact.png'/>
				<VideoCard
				className='recommended_video'
				title='MKBHD Setup Tour 2020'
				views='16.4M views'
				timestamp='3 weeks ago'
				channelImage="/mkbhdprof.jpg"
				channel='Marques Brownlee'
				image='/mkbhd.jpg'/>

			</div>
		
		</div>
	)
}

export default RecommendedVideos
