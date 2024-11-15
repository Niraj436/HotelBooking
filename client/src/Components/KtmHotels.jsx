import React, { useEffect, useState } from 'react';
import { getAllHotels } from '../API/HotelsApi';
import { API } from '../config';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const KtmHotels = () => {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1024 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 764, min: 460 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 460, min: 0 },
			items: 1,
		},
	};

	useEffect(() => {
		getAllHotels().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setHotels(data);

				// console.log(data);
			}
			setLoading(false);
		});
	}, []);

	const cityKtm = hotels.filter((item) => item.city === 'Kathmandu');
	const cityLalitpur = hotels.filter((item) => item.city === 'Lalitpur');

	return (
		<>
			{loading ? (
				<div className='text-center py-10'>Loading...</div>
			) : (
				<>
					<div className='px-10'>
						<p className='text-2xl font-bold pb-4 pt-10'>Hotels in Kathmandu</p>
						<Carousel
							responsive={responsive}
							slidesToSlide={1}
							arrows={true}>
							{cityKtm.map((hotel) => {
								return (
									<div
										key={hotel._id}
										className='card px-2  rounded-lg h-96 flex flex-col justify-evenly'>
										<img
											src={`${API}/${hotel.photos[0]}`}
											alt=''
											className='rounded-lg object-cover h-[200px]'
										/>
										<h2 className='text-xl font-bold py-1'>{hotel.name}</h2>
										<p className='underline text-blue-500'>{hotel.address}</p>
										<p className=''> {hotel.title}</p>
										<p className=''>
											<Link
												to={`/hotel/${hotel._id}`}
												className='w-full btn bg-blue-500 text-white hover:bg-blue-600'>
												Check Availablity
											</Link>
										</p>
									</div>
								);
							})}
						</Carousel>
					</div>
					<div className='px-10'>
						<p className='text-2xl font-bold pb-4 pt-10'>Hotels in Lalitpur</p>
						<Carousel
							responsive={responsive}
							slidesToSlide={1}
							arrows={true}>
							{cityLalitpur.map((hotel) => {
								return (
									<div
										key={hotel._id}
										className='card px-2 rounded-lg h-96 flex flex-col justify-evenly'>
										<img
											src={`${API}/${hotel.photos[0]}`}
											alt=''
											className='rounded-lg object-cover h-[200px]'
										/>
										<h2 className='text-xl font-bold py-1'>{hotel.name}</h2>
										<p className='underline text-blue-400'>{hotel.address}</p>
										<p className=''> {hotel.title}</p>
										<p className=''>
											<Link
												to={`/hotel/${hotel._id}`}
												className='w-full btn bg-blue-500 text-white hover:bg-blue-600'>
												Check Availablity
											</Link>
										</p>
									</div>
								);
							})}
						</Carousel>
					</div>
				</>
			)}
		</>
	);
};

export default KtmHotels;
