import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Profile({children, useBorder, name, role, image, background, post, portfolio}) {
	return (
		<article className={`pb-5 w-full sm:rounded-xl ${useBorder} bg-eerieBlack `}>
			<img src={background} alt='bg card' className='object-cover w-full h-32 rounded-t-xl sm:rounded-t-xl' />
			<div className='flex flex-col px-2 sm:px-4'>
				<div className='flex gap-2 mb-2 h-fit'>
					<img
						src={image}
						alt='avatar profile'
						className='relative object-cover border-4 rounded-full h-14 w-14 -top-3 border-eerieBlack'
					/>
					<div className='flex flex-col pt-1'>
						<p className='text-base font-medium text-textPrimary'>{name}</p>
						<p className='text-[10px] font-medium text-textSecondary'>
							{role}
						</p>
					</div>
				</div>
				<div className='flex items-center gap-4 px-2 text-sm font-medium text-textPrimary'>
					<p>
						{post.length} <span className='text-[#A9A9A9] '>Post</span>
					</p>
					<p>|</p>
					<p>
						{portfolio.length} <span className='text-[#A9A9A9]'>Portfolio</span>
					</p>
				</div>
				<Link to={`/profile/${name}`}>
					<Button
						color=''
						size='sm'
						className='w-full mt-5 transition-all duration-300 ease-out text-textPrimary hover:bg-opacity-80 bg-fernGreen'
					>
						{children}
					</Button>
				</Link>
			</div>
		</article>
	);
}

Profile.propTypes = {
	children: PropTypes.string.isRequired,
	useBorder: PropTypes.string,
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	post: PropTypes.array.isRequired,
	portfolio: PropTypes.array.isRequired,
	background: PropTypes.string.isRequired,
}