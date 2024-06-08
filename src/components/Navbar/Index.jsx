import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoBrand from '../../assets/icons/logoBrand.png';
import { FiHome } from 'react-icons/fi';
import { TfiPencilAlt } from 'react-icons/tfi';
import { MdOutlineKeyboardArrowDown, MdOutlinePostAdd } from 'react-icons/md';
import avatarProfile from '../../assets/images/profile-pic (4).png';
import PropTypes from 'prop-types';

export default function Index({ openModal, isOpenModal }) {
	const location = useLocation();

	return (
		<>
			<header className='lg:px-10 px-5 hidden sm:block border-b border-[#424242] bg-navbar'>
				<div className='flex justify-between lg:container'>
					<Link to='/'>
						<img src={logoBrand} alt='logo brand' className='relative -top-3' />
					</Link>
					<nav className='flex items-center gap-10 px-6 text-textSecondary'>
						<Link
							className={`flex items-start gap-2 text-base font-semibold transition-all duration-200 ease-out hover:opacity-80 ${
								isOpenModal || location.pathname !== '/' ? '' : 'active'
							}`}
							to='/'
						>
							<FiHome title='Home' className='text-3xl lg:text-xl' />
							<p className='hidden lg:block'>Home</p>
						</Link>
						<Link
							className={`flex gap-3 text-base font-semibold transition-all duration-200 ease-out hover:opacity-80 ${
								isOpenModal ? 'active' : ''
							}`}
							onClick={() => {
								sessionStorage.setItem('openModal', 'true')
								openModal(true);
							}}
							to='/'
						>
							<TfiPencilAlt title='Write Progress' className='text-2xl lg:text-xl' />
							<p className='hidden lg:block'>Write Progress</p>
						</Link>
						<Link
							to='/post-portfolio'
							className={`flex gap-2 text-base font-semibold transition-all duration-200 ease-out hover:opacity-80 ${
								location.pathname === '/post-portfolio' ? 'active' : ''
							}`}
						>
							<MdOutlinePostAdd
								title='Post Portfolio'
								className='text-4xl lg:text-2xl'
							/>
							<p className='hidden lg:block'>Post Portfolio</p>
						</Link>
						<div className='flex items-center gap-2 cursor-pointer'>
							<img
								src={avatarProfile}
								alt='avatar'
								className='object-cover w-10 h-10 transition-all duration-200 ease-out rounded-full lg:w-7 lg:h-7 hover:opacity-80'
							/>
							<p className='text-xl lg:text-base'>Me</p>
							<MdOutlineKeyboardArrowDown />
						</div>
					</nav>
				</div>
			</header>
			<footer className='fixed bottom-0 z-50 w-full py-1 border-t border-[#424242] bg-navbar flex sm:hidden'>
				<div className='container flex items-center justify-around py-3 text-textSecondary'>
					<NavLink
						activeclassname='active'
						className='transition-all duration-200 ease-out hover:opacity-80'
						to='/'
					>
						<FiHome title='Home' className='text-2xl' />
					</NavLink>
					<button
						color=''
						className={`flex gap-3 text-base font-semibold transition-all duration-200 ease-out hover:opacity-80 ${
							isOpenModal ? 'active' : ''
						}`}
						onClick={() => {
							sessionStorage.setItem('openModal', 'true')
							openModal(true);
						}}
						to='/'
					>
						<TfiPencilAlt title='Write Progress' className='text-2xl lg:text-xl' />
					</button>
					<NavLink
						activeclassname='active'
						className='transition-all duration-200 ease-out hover:opacity-80'
						to='/post-portfolio'
					>
						<MdOutlinePostAdd title='Post Portfolio' className='text-3xl' />
					</NavLink>
					<div className='flex flex-col items-center transition-all duration-200 ease-out cursor-pointer hover:opacity-80'>
						<img
							src={avatarProfile}
							alt='avatar'
							className='object-cover rounded-full w-7 h-7'
						/>
					</div>
				</div>
			</footer>
		</>
	);
}

Index.propTypes = {
	openModal: PropTypes.func,
	isOpenModal: PropTypes.bool,
};
