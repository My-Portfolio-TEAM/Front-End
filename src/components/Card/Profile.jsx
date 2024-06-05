import React from 'react';
import bgCardProfile from '../../assets/images/bgCardProfile.jpg';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import avatarProfile from '../../assets/images/profile-pic (4).png'

export default function Profile() {
	return (
		<article className='pb-5 sm:rounded-xl bg-eerieBlack '>
			<img src={bgCardProfile} alt='bg card' className='object-cover w-full h-32 sm:rounded-t-xl' />
			<div className='flex flex-col px-2 sm:px-4'>
				<div className='flex gap-2 mb-2 h-fit'>
					<img
						src={avatarProfile}
						alt='avatar profile'
						className='relative object-cover w-16 h-16 border-4 rounded-full -top-3 border-eerieBlack'
					/>
					<div className='flex flex-col pt-1'>
						<p className='text-base font-medium text-textPrimary'>Muhamad Alif Pahreza</p>
						<p className='text-[10px] font-medium text-textSecondary'>
							Software Engineering
						</p>
					</div>
				</div>
				<div className='flex items-center gap-4 px-2 text-sm font-medium text-textPrimary'>
					<p>
						5 <span className='text-[#A9A9A9] '>Post</span>
					</p>
					<p>|</p>
					<p>
						2 <span className='text-[#A9A9A9]'>Portfolio</span>
					</p>
				</div>
				<Link>
					<Button
						size='sm'
						className='w-full mt-5 text-textPrimary hover:bg-fernGreenSecondary bg-fernGreen'
					>
						My Profile
					</Button>
				</Link>
			</div>
		</article>
	);
}
