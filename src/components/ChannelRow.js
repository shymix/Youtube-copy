import React from 'react'
import '../components/ChannelRow.css';

function ChannelRow({ image, Channel, verified, subs, numOfVideos, description}) {
	return (
		<div className='channelrow'>

			<div className='channelrow__image'>
				<img src={image} alt='profile pic'/>
			</div>

			<div className='channelrow__text'>
				<div className='channelrow__name'>
					<p className='name'>{Channel}</p>
					<img src={verified} alt='verified'/>
				</div>
				<p className='channelrow__stats'>{subs} • {numOfVideos}</p>
				<p className='channelrow__description'>{description}</p>
			</div>




		</div>







	)
}

export default ChannelRow
