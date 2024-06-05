import React from 'react';
import SmallCardPost from './SmallCardPost';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function MostLikedPost() {
	return (
		<section className='flex flex-col gap-5 p-5 w-96 h-fit bg-eerieBlack rounded-xl'>
			<h2 className='text-lg font-semibold text-textPrimary'>Most Liked Post</h2>
			<SmallCardPost />
			<SmallCardPost />
			<SmallCardPost />
			<Link
				to='/'
				className='flex items-center gap-2 font-medium text-textPrimary hover:text-textSecondary w-fit'
			>
				See more <HiArrowNarrowRight />
			</Link>
		</section>
	);
}
