import React from 'react';
import Slider from 'react-slick';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import carousel2 from '../Images/carousel2.jpg';
import carousel3 from '../Images/carousel3.jpg';
import carousel4 from '../Images/carousel4.jpg';
import carousel5 from '../Images/carousel5.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerTxt from './BannerTxt';
const MyCarousel = () => {
	function NextArrow(props) {
		const { className, onClick } = props;
		return (
			<FaCircleArrowRight
				className='text-4xl absolute top-1/2 right-0 z-20 mr-4'
				onClick={onClick}
			/>
		);
	}
	function PrevArrow(props) {
		const { className, onClick } = props;

		return (
			<FaCircleArrowLeft
				className='text-4xl absolute top-1/2 left-0 z-20 ml-4'
				onClick={onClick}
			/>
		);
	}
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	return (
		<div className='px-3'>
			<Slider {...settings}>
				<div>
					<img
						src={carousel2}
						className=' relative w-full  md:h-[550px] h-[200px] object-cover'
					/>
					<BannerTxt />
				</div>
				<div>
					<img
						src={carousel3}
						className=' relative w-full  md:h-[550px] h-[200px] object-cover'
					/>
					<BannerTxt />
				</div>
				<div>
					<img
						src={carousel4}
						className=' relative w-full  md:h-[550px] h-[200px] object-cover'
					/>
					<BannerTxt />
				</div>
				<div>
					<img
						src={carousel5}
						className=' relative w-full  md:h-[500px] h-[200px] object-cover'
					/>
					<BannerTxt />
				</div>
			</Slider>
		</div>
	);
};

export default MyCarousel;
