import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllHotels, getHotel, getHotelRooms } from '../API/HotelsApi';
import { API } from '../config';
import { useDispatch } from 'react-redux';
import { addFav } from '../Store/FavSlice';
import Swal from 'sweetalert2';
import SimilarHotels from '../Components/SimilarHotels';
import Loader from '../Components/Loader';

const Hotel = () => {
	const { id } = useParams();
	const [hotel, setHotel] = useState([]);
	const [hotels, setHotels] = useState([]);
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loading1, setLoading1] = useState(true);

	const dispatch = useDispatch();
	useEffect(() => {
		getHotel(id).then((data) => {
			if (data.error) {
				console.log('Error: ', data.error);
			} else {
				setHotel(data);
			}
			setLoading(false);
		});

		getHotelRooms(id).then((data) => {
			if (data.error) {
				console.log('Error', data.error);
			} else {
				setRooms(data);
			}
		});

		getAllHotels().then((data) => {
			if (data.error) {
				console.log('Error', data.error);
			} else {
				setHotels(data);
			}
			setLoading1(false);
		});
		window.scrollTo(0, 0);
	}, []);

	const similarHotels = hotels.filter(
		(item) => item.city === hotel.city && item._id !== hotel._id
	);

	const handleAdd = (hotel) => {
		Swal.fire({
			title: 'FavList',
			text: 'Do you want to add to your favlist?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Yes',
			confirmButtonColor: 'red',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Added successfully',
					icon: 'success',
					timer: 2000,
					showCancelButton: false,
				});
				dispatch(addFav(hotel));
			}
		});
	};

	const roomsWithEmptyBookings = rooms.filter(
		(room) => !room.currentbookings || room.currentbookings.length === 0
	);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='grid md:grid-cols-2 gap-x-5 px-10 py-6 bg-indigo-100 dark'>
						<div className=' w-full '>
							<img
								src={`${API}/${hotel.photos}`}
								alt=''
								className='rounded-2xl '
							/>
						</div>
						<div className='flex flex-col align-middle gap-2 '>
							<div className='font-bold text-2xl text-center'>
								<p>{hotel.name}</p>
							</div>
							<div className='pl-3'>
								<p>
									<span className='font-bold text-xl'>Type: </span>
									{hotel.type}
								</p>
							</div>
							<div className='pl-3'>
								<p>
									{' '}
									<span className='font-bold text-xl'>Distance: </span>
									{hotel.distance} from center
								</p>
							</div>
							<div className='pl-3'>
								<p>
									<span className='font-bold text-xl'>Title: </span>
									{hotel.title}
								</p>
							</div>
							<div className='pl-3'>
								<span className='font-bold text-xl'>About Us: </span>
								<p>{hotel.desc}</p>
							</div>
							<div className='pl-3 py-6'>
								<button
									className='btn btn-success text-white px-6'
									onClick={() => {
										handleAdd(hotel);
									}}>
									Add to Favlist
								</button>
							</div>
						</div>
					</div>

					<div className='overflow-x-auto px-4 '>
						<p className='text-2xl font-semibold text-center py-3'>
							Available Rooms
						</p>
						<table className='table bg-slate-100 text-center dark'>
							{/* head */}
							<thead className='dark '>
								<tr className=''>
									<th className='md:block hidden'>S.N</th>
									<th>Title</th>
									<th className='md:block hidden'>About</th>
									<th>People</th>
									<th>Price</th>
									<th></th>
								</tr>
							</thead>
							<tbody className=''>
								{roomsWithEmptyBookings?.length > 0 ? (
									roomsWithEmptyBookings.map((room, i) => {
										return (
											<tr
												key={room._id}
												className=''>
												<th className='md:block hidden'>{i + 1}</th>
												<td>{room.title}</td>
												<td className='w-1/4 md:inline hidden'>{room.desc}</td>
												<td>{room.maxPeople}</td>
												<td>{room.price}</td>
												<td>
													<Link
														to={`${room._id}`}
														className=' md:py-3 md:px-6 p-2 md:text-lg text-xs bg-blue-500 rounded-md text-white hover:bg-blue-600 hover:shadow-md'>
														Book
													</Link>
												</td>
											</tr>
										);
									})
								) : (
									<tr className='text-xl py-6'>
										<th></th>
										<th></th>
										<th>Sorry! No rooms available</th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</>
			)}
			{loading1 ? (
				<Loader />
			) : (
				<div className=''>
					<p className='pt-10 pb-4 px-8 text-3xl font-bold'>Similar hotels</p>
					{similarHotels.length > 0 ? (
						similarHotels.map((similarHotel) => {
							return (
								<div
									key={similarHotel._id}
									className='mx-4 hover:shadow-md '>
									<SimilarHotels hotel={similarHotel} />
								</div>
							);
						})
					) : (
						<p>no similar hotel</p>
					)}
				</div>
			)}
		</>
	);
};

export default Hotel;
