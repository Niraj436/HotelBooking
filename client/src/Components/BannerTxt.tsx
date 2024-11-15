import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BannerTxt = () => {
	return (
		<div className='w-full h-full absolute hidden  lg:inline-block top-0 ml-20'>
			<div className='flex  w-full h-full flex-col justify-center m-auto gap-y-3'>
				<motion.h1
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='text-white text-6xl font-bold'>
					Book Hotel{' '}
				</motion.h1>
				<br />
				<motion.p
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='text-white text-xl font-bold'>
					Book your hotel, create lasting memories
				</motion.p>

				<motion.div
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='flex gap-4'>
					<button className='bg-slate-200 py-4 px-8 rounded-full hover:bg-white font-semibold'>
						<Link to={'/about'}>About</Link>
					</button>
					<button className='bg-slate-200 py-4 px-8 rounded-full hover:bg-white font-semibold'>
						<Link to={'/allhotels'}>Book now</Link>
					</button>
				</motion.div>
			</div>
		</div>
	);
};

export default BannerTxt;
