import React from 'react';

import Availability from '../Components/Availability';
import LearnAboutUs from '../Components/LearnAboutUs';
import { API } from '../config';
import KtmHotels from '../Components/KtmHotels';

import MyCarousel from '../Components/MyCarousel';

const Home = () => {
	return (
		<div className=''>
			<div>
				{/* <Carousel /> */}
				<MyCarousel />
			</div>

			<div>
				{/* this ktm hotels incluses all cites */}
				<KtmHotels />
			</div>
			<div>
				<LearnAboutUs />
			</div>
		</div>
	);
};

export default Home;
