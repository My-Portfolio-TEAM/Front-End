import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Index';
import Profile from '../components/Card/Profile';
import SeePost from '../components/Card/SeePost';
import Post from '../components/Card/Post';
import Search from '../components/Input/SearchInput';
import SuggestedDeveloper from '../components/Card/SuggestedDeveloper';
import MostLikedPost from '../components/Card/MostLikedPost';
import WriteProgressInput from '../components/Input/WriteProgressInput';
import avatarProfile from '../assets/images/profile-pic (4).png';
import bgCardProfile from '../assets/images/bgCardProfile.jpg';

export default function HomePage() {
	const [selectedPost, setSelectedPost] = useState('All Posts');
	const [openModal, setOpenModal] = useState(false);

	function onCloseModal() {
		setOpenModal(!openModal);
	}

	useEffect(() => {
		if (openModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [openModal]);

	useEffect(() => {
		if (sessionStorage.getItem('openModal') === 'true') {
			setOpenModal(true);
			sessionStorage.removeItem('openModal');
		}
	});

	const posts = [
		{ id: 1, category: 'All Posts' },
		{ id: 2, category: 'All Posts' },
		{ id: 4, category: 'My Posts' },
	];

	const portfolios = [
		{
			id: 1,
			url: 'https://unsplash.com/s/photos/portfolio',
			image: 'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'My portfolio-1',
			description:
				'This is my first portfolio This is my first portfolio This is my first portfolio This is my first portfolio This is my first portfolio This is my first portfolio',
		},
		{
			id: 2,
			url: 'https://unsplash.com/s/photos/portfolio',
			image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'My portfolio-2',
			description: 'This is my second portfolio',
		},
		{
			id: 3,
			url: 'https://unsplash.com/s/photos/portfolio',
			image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'My portfolio-3',
			description: 'This is my third portfolio',
		},
		{
			id: 4,
			url: 'https://unsplash.com/s/photos/portfolio',
			image: 'https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'My portfolio-4',
			description: 'This is my fourth portfolio',
		},
	];

	const profiles = [
		{
			id: 1,
			name: 'Muhamad Alif Pahreza',
			role: 'Software Engineer',
			image: avatarProfile,
			background: bgCardProfile,
		},
	];

	return (
		<div className=' bg-chineseBlack'>
			<div className='sticky top-0 z-50'>
				<Navbar openModal={onCloseModal} isOpenModalStudy={openModal} />
			</div>
			<div className='py-0 mb-20 sm:px-5 lg:container sm:py-5 lg:px-10 2xl:px-20'>
				<div className='flex flex-col sm:flex-row'>
					<div className='h-full sm:w-72 xl:w-70 sm:sticky top-28'>
						{profiles?.map((profile) => (
							<Profile
								key={profile.id}
								{...profile}
								post={posts}
								portfolio={portfolios}
							>
								My Profile
							</Profile>
						))}
					</div>
					<div className='flex flex-col gap-2 mx-0 sm:flex-1 sm:gap-2 sm:mx-4 lg:mx-5 2xl:mx-10'>
						<Search />
						<SeePost postType={setSelectedPost} />
						{posts
							.filter((post) => post.category === selectedPost)
							.map((post) => (
								<Post key={post.id} id={post.id} page={'/'} />
							))}
					</div>
					<div className='flex-col hidden gap-5 xl:flex'>
						<SuggestedDeveloper />
						<MostLikedPost />
					</div>
				</div>
			</div>
			{openModal && (
				<div className='fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-70'>
					<div className='modal-content'>
						{profiles?.map((profile) => (
							<WriteProgressInput
								closeModal={onCloseModal}
								key={profile.id}
								id={profile.id}
								img={profile.image}
								name={profile.name}
								role={profile.role}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
