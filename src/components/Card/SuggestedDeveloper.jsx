import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function SuggestedDeveloper() {
	const userProfiles = [
		{
			id: 1,
			name: 'Rudiger Burkins',
			role: 'Fullstack Developer',
			image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			id: 2,
			name: 'Bennie Roh',
			role: 'Project Manager',
			image: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			id: 3,
			name: 'Patin Beteta',
			role: 'Front-End Developer',
			image: 'https://images.unsplash.com/photo-1564636866914-cf34c1b21880?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			id: 4,
			name: 'Ham Drenner',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
	];

	return (
		<section className='flex flex-col gap-3 p-5 w-96 h-fit bg-eerieBlack rounded-xl'>
			<h2 className='mb-2 text-lg font-semibold text-textPrimary'>Suggested Developer</h2>
			<div className='flex flex-col gap-2'>
				{userProfiles?.map((userProfile) => (
					<>
						<div className='flex items-center justify-between' key={userProfile.id}>
							<div className='flex items-center gap-3'>
								<img
									src={userProfile.image}
									alt=''
									className='object-cover w-10 h-10 rounded-full'
								/>
								<div>
									<p className='font-medium text-textPrimary'>{userProfile.name}</p>
									<p className='text-xs font-medium text-textSecondary'>
										{userProfile.role}
									</p>
								</div>
							</div>
							<Link to={`/profile/${userProfile.name}`}>
								<Button
									color=''
									size='xs'
									className='font-medium transition-all duration-300 border border-textPrimary text-textPrimary hover:bg-ufoGreen hover:border-ufoGreen focus:ring-0'
								>
									See Profile
								</Button>
							</Link>
						</div>
						<div className='w-full h-[2px] bg-[#262626]' />
					</>
				))}
			</div>

			<Link
				to='/suggested-developer/all'
				className='flex items-center gap-2 font-medium text-textPrimary hover:text-textSecondary w-fit'
			>
				See more <HiArrowNarrowRight />
			</Link>
		</section>
	);
}
