import React from 'react';
import { NavLink } from 'react-router-dom';
import logoBrand from '../../assets/icons/logoBrand.png';
import { FiHome } from 'react-icons/fi';
import { TfiPencilAlt } from 'react-icons/tfi';
import { MdOutlineKeyboardArrowDown, MdOutlinePostAdd } from 'react-icons/md';
import avatarProfile from '../../assets/images/profile-pic (4).png';

export default function Index() {
	return (
		<>
			<header className='lg:px-10 px-5 hidden md:block border-b border-[#424242] bg-navbar'>
				<div className='flex justify-between lg:container'>
					<img src={logoBrand} alt='logo brand' className='relative -top-3' />
					<nav className='flex items-center gap-10 px-6 text-textSecondary'>
						<NavLink
							activeClassName='active'
							className='flex items-start gap-2 text-base font-medium'
							to='/'
						>
							<FiHome title='Home' className='text-3xl lg:text-xl' />
							<p className='hidden lg:block'>Home</p>
						</NavLink>
						<NavLink
							activeClassName='active'
							className='flex gap-3 text-base font-medium '
							to='/write-progress'
						>
							<TfiPencilAlt title='Write Progress' className='text-2xl lg:text-xl' />
							<p className='hidden lg:block'>Write Progress</p>
						</NavLink>
						<NavLink
							to='/post-portfolio'
							activeClassName='active'
							className='flex gap-2 text-base font-medium'
						>
							<MdOutlinePostAdd title='Post Portfolio' className='text-4xl lg:text-2xl' />
							<p className='hidden lg:block'>Post Portfolio</p>
						</NavLink>
						<div className='flex items-center gap-2'>
							<img
								src={avatarProfile}
								alt='avatar'
								className='object-cover w-10 h-10 rounded-full lg:w-7 lg:h-7'
							/>
							<p className='text-xl lg:text-base'>Me</p>
							<MdOutlineKeyboardArrowDown />
						</div>
					</nav>
				</div>
			</header>
			<footer className='fixed bottom-0 w-full py-1 border-t border-[#424242] bg-navbar flex md:hidden'>
				<div className='container flex items-center justify-around py-3 text-textSecondary'>
					<NavLink activeClassName='active' to='/'>
						<FiHome title='Home' className='text-2xl' />
					</NavLink>
					<NavLink activeClassName='active' to='/write-progress'>
						<TfiPencilAlt title='Write Progress' className='text-2xl'/>
					</NavLink>
					<NavLink activeClassName='active' to='/post-portfolio'>
						<MdOutlinePostAdd title='Post Portfolio' className='text-3xl'/>
					</NavLink>
					<div className='flex flex-col items-center'>
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
