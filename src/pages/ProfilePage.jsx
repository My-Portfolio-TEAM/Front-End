import React, { useState } from 'react';
import Navbar from '../components/Navbar/Index';
import HeadProfile from '../components/Card/HeadProfile';
import AboutProfile from '../components/Card/AboutProfile';
import SkillsProfile from '../components/Card/SkillsProfile';
import Post from '../components/Card/Post';
import Portfolio from '../components/Card/Portfolio';
import avatarProfile from '../assets/images/profile-pic (4).png';
import bgCardProfile from '../assets/images/bgCardProfile.jpg';
import { useParams } from 'react-router-dom';

export default function ProfilePage() {
	const [activeSession, setActiveSession] = useState('Portfolio');
	const { name } = useParams();
	const selectedName = decodeURIComponent(name);

	const posts = [
		{ id: 1, category: 'All Post' },
		{ id: 2, category: 'All Post' },
		{ id: 3, category: 'All Post' },
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

	const userProfiles = [
		{
			id: 1,
			name: 'Rudiger Burkins',
			role: 'Fullstack Developer',
			image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			background:
				'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			headline: 'UI/UX Designer | Front-End Developer | Back-End Developer',
			location: 'Jakarta, Indonesia',
		},
		{
			id: 2,
			name: 'Bennie Roh',
			role: 'Project Manager',
			image: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			background:
				'https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			headline: 'Project Manager | Scrum Master | Product Owner',
			location: 'New York, Unites States',
		},
		{
			id: 3,
			name: 'Patin Beteta',
			role: 'Front-End Developer',
			image: 'https://images.unsplash.com/photo-1564636866914-cf34c1b21880?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			background:
				'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			headline: 'Security Engineer | Front-End Developer | Back-End Developer',
			location: 'Depok, Indonesia',
		},
		{
			id: 4,
			name: 'Ham Drenner',
			role: 'Web Developer',
			image: 'https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			background:
				'https://images.unsplash.com/photo-1561212044-bac5ef688a07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			headline: 'Web Developer Enthusiast',
			location: 'Bukit Tinggi, Malaysia',
		},
		{
			id: 5,
			name: 'Muhamad Alif Pahreza',
			role: 'Software Engineer',
			image: avatarProfile,
			background: bgCardProfile,
			headline: 'Software Engineer at Tokopedia, Google since 2018',
			location: 'Banjarmasin, Indonesia',
		},
	];

	return (
		<section className='text-textPrimary'>
			<div className='sticky top-0 z-50'>
				<Navbar />
			</div>
			<div className='container sm:mt-5 lg:px-52'>
				{userProfiles
					.filter((user) => user.name === selectedName)
					.map((user) => (
						<HeadProfile key={user.id} {...user} />
					))}
				<AboutProfile />
				<SkillsProfile />
				<div className='flex flex-col px-3 mt-10 mb-40 sm:px-5 lg:px-10'>
					<div className='flex gap-10'>
						<button
							type='button'
							className='p-0 border-gray-500 rounded-s-xl'
							onClick={() => setActiveSession('Portfolio')}
						>
							<h1
								className={`text-xl font-medium cursor-pointer ${
									activeSession === 'Portfolio'
										? 'border-b-2 border-textSecondary'
										: ''
								}`}
							>
								Portfolio
							</h1>
						</button>
						{/*<div className='text-3xl cursor-default'>|</div>*/}
						<button
							type='button'
							className='p-0 rounded-e-xl'
							onClick={() => setActiveSession('Posts')}
						>
							<h1
								className={`text-xl font-medium cursor-pointer ${
									activeSession === 'Posts'
										? 'border-b-2 border-textSecondary'
										: ''
								}`}
							>
								Posts
							</h1>
						</button>
					</div>
					<div className='my-5'>
						{activeSession === 'Posts' ? (
							<div className='grid w-full gap-5 sm:grid-cols-2'>
								{posts.map((post) => (
									<Post key={post.id} id={post.id} page='/profile' />
								))}
							</div>
						) : (
							<div className='grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3'>
								{portfolios.map((portfolio) => (
									<Portfolio key={portfolio.id} {...portfolio} />
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
