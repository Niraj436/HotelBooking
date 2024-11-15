import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import hotelLogo from '../Images/hotellogo.png';
import style from './NavBar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { isAuthenticated, signOut } from '../API/authApi';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Swal from 'sweetalert2';
import { ThemeContext } from '../App';

const NavBar = () => {
	let { user } = isAuthenticated();
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();
	const { toggleTheme, theme } = useContext(ThemeContext);

	const logOut = () => {
		Swal.fire({
			title: 'LogOut',
			text: 'Do you want to logout',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Yes',
			cancelButtonColor: 'red',
		}).then((result) => {
			if (result.isConfirmed) {
				signOut().then((data) => {
					if (data.error) {
						Swal.fire({
							text: 'Failed',
							title: 'Failed to logOut',
							showCancelButton: false,
							timer: 2000,
						});
					} else {
						Swal.fire({
							title: 'Logout successfully',
							icon: 'success',
							timer: 2000,
							showCancelButton: false,
						});
						navigate('/signin');
						setSuccess(true);
					}
				});
			}
		});
	};

	const redirect = () => {
		if (success) {
			setSuccess(false);
			navigate('/');
		}
	};

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<div
				className={`xl:h-20 ${
					!open ? `h-20` : ''
				} sticky top-0 z-50 bg-white flex xl:flex-row  flex-col xl:justify-between  xl:gap-x-0 gap-x-2 items-center px-16 font-bold text-slate-800 shadow-xl py-3 navBar`}>
				<div className='text-3xl font-black text-orange-500'>
					<img
						src={hotelLogo}
						alt=''
						className='w-10 inline-block pr-1'
					/>
					<Link to={'/'}>BookHotel</Link>
				</div>

				<div className='absolute  right-2 xl:hidden'>
					<MenuIcon
						className=' '
						fontSize={'large'}
						onClick={toggleMenu}
					/>
				</div>
				<div
					className={`flex gap-8 ${menuOpen ? 'flex-col' : 'hidden'} xl:flex `}>
					<div className='flex xl:flex-row xl:flex-wrap flex-col  justify-center xl:justify-evenly gap-8 my-auto text-sm text-gray-600 text-bold pl-2 text-center mx-2 '>
						<li>
							<Link to={'/'}>HOME</Link>
						</li>
						<li>
							<Link to={'/about'}>ABOUT</Link>
						</li>
						<li>
							<Link to={'/services'}>SERVICES</Link>
						</li>
						<li>
							<Link to={'/allhotels'}>HOTELS</Link>
						</li>
						<li>
							<Link to={'/blog'}>BLOG</Link>
						</li>
						<li>
							<Link to={'/contact'}>CONTACT</Link>
						</li>

						{user ? (
							<>
								{user.isAdmin ? (
									<li>
										<Link to={'/admin/dashboard'}>
											<VerifiedUserIcon />
											{user.username}
										</Link>
									</li>
								) : (
									<li>
										<Link to={'/user/userprofile'}>
											<PersonIcon /> {user.username}
										</Link>
									</li>
								)}
								<li>
									<p
										className='cursor-pointer'
										onClick={logOut}>
										LogOut <ExitToAppIcon />{' '}
									</p>
								</li>
							</>
						) : (
							<>
								<li>
									<Link to={'/signin'}>
										<span className='pr-1'>
											<LoginIcon className='ml-1' />
										</span>
										LOGIN
									</Link>
								</li>
							</>
						)}
					</div>
					<div>
						<li className='text-center'>
							<Link
								className='btn bg-orange-500 text-white hover:bg-orange-600'
								to={'/book'}>
								Book Now
							</Link>
						</li>
					</div>
					<div className='pt-2 text-center'>
						<label className='switch'>
							<input
								type='checkbox'
								onChange={toggleTheme}
								checked={theme === 'dark'}
							/>
							<span className='slider'></span>
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
