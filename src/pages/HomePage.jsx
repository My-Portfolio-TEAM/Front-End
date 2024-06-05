import React from 'react';
import Navbar from '../components/Navbar/Index';
import Profile from '../components/Card/Profile';
import SeePost from '../components/Card/SeePost';
import Post from '../components/Card/Post';
import Search from '../components/Input/SearchInput';
import SuggestedDeveloper from '../components/Card/SuggestedDeveloper';
import MostLikedPost from '../components/Card/MostLikedPost';

export default function HomePage() {

	return (
		<div className=' bg-chineseBlack'>
			<div className='sticky top-0 z-50'>
				<Navbar />
			</div>
			<div className='py-0 mb-20 md:px-5 lg:container sm:py-5 lg:px-10'>
				<div className='flex flex-col sm:flex-row'>
					<div className='h-full md:flex-2 md:w-72 xl:w-70 sm:sticky top-28'>
						<Profile />
					</div>
					<div className='flex flex-col gap-2 mx-0 md:flex-1 sm:gap-2 md:mx-4 lg:mx-5'>
						<Search />
						<SeePost />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
					</div>
					<div className='flex-col hidden gap-5 xl:flex'>
						<SuggestedDeveloper />
						<MostLikedPost />
					</div>
				</div>
			</div>
		</div>
	);
}
