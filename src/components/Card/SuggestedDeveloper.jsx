import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function SuggestedDeveloper() {
	return (
		<section className='flex flex-col gap-3 p-5 w-96 h-fit bg-eerieBlack rounded-xl'>
			<h2 className='mb-2 text-lg font-semibold text-textPrimary'>Suggested Developer</h2>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<img
							src='https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
							className='object-cover w-10 h-10 rounded-full'
						/>
						<div>
							<p className='font-medium text-textPrimary'>Rudiger Burkins</p>
							<p className='text-xs font-medium text-textSecondary'>
								Fullstack Developer
							</p>
						</div>
					</div>
					<Link to='/'>
						<Button
							size='xs'
							className='font-medium border-white text-textPrimary hover:bg-ufoGreen hover:border-ufoGreen focus:ring-0'
						>
							See Profile
						</Button>
					</Link>
				</div>
				<div className='w-full h-[2px] bg-[#262626]' />
			</div>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<img
							src='https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
							className='object-cover w-10 h-10 rounded-full'
						/>
						<div>
							<p className='font-medium text-textPrimary'>Bennie Roh</p>
							<p className='text-xs font-medium text-textSecondary'>
								Project Manager
							</p>
						</div>
					</div>
					<Link to='/'>
						<Button
							size='xs'
							className='font-medium border-white text-textPrimary hover:bg-ufoGreen hover:border-ufoGreen focus:ring-0'
						>
							See Profile
						</Button>
					</Link>
				</div>
				<div className='w-full h-[2px] bg-[#262626]' />
			</div>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<img
							src='https://images.unsplash.com/photo-1564636866914-cf34c1b21880?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
							className='object-cover w-10 h-10 rounded-full'
						/>
						<div>
							<p className='font-medium text-textPrimary'>Patin Beteta</p>
							<p className='text-xs font-medium text-textSecondary'>
								Front-End Developer
							</p>
						</div>
					</div>
					<Link to='/'>
						<Button
							size='xs'
							className='font-medium border-white text-textPrimary hover:bg-ufoGreen hover:border-ufoGreen focus:ring-0'
						>
							See Profile
						</Button>
					</Link>
				</div>
				<div className='w-full h-[2px] bg-[#262626]' />
			</div>
			<div className='flex flex-col gap-2'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<img
							src='https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt=''
							className='object-cover w-10 h-10 rounded-full'
						/>
						<div>
							<p className='font-medium text-textPrimary'>Ham Drenner</p>
							<p className='text-xs font-medium text-textSecondary'>Web Developer</p>
						</div>
					</div>
					<Link to='/'>
						<Button
							size='xs'
							className='font-medium border-white text-textPrimary hover:text-textPrimary hover:bg-ufoGreen hover:border-ufoGreen focus:ring-0'
						>
							See Profile
						</Button>
					</Link>
				</div>
				<div className='w-full h-[2px] bg-[#262626]' />
			</div>
			<Link
				to='/'
				className='flex items-center gap-2 font-medium text-textPrimary hover:text-textSecondary w-fit'
			>
				See more <HiArrowNarrowRight />
			</Link>
		</section>
	);
}