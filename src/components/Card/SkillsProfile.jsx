import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function SkillsProfile() {
	const skills = [
		{
			id: 1,
			category: 'Programming',
		},
		{
			id: 2,
			category: 'web design',
		},
		{
			id: 3,
			category: 'figma',
		},
		{
			id: 4,
			category: 'reactjs',
		},
		{
			id: 5,
			category: 'wireframing',
		},
		{
			id: 6,
			category: 'prototyping',
		},
	];

	return (
		<section className='px-3 py-5 my-3 sm:my-5 sm:px-10 bg-eerieBlack sm:rounded-xl'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-medium'>Skills</h1>
				<Link
					to='/profile'
					className='p-2 text-2xl transition-all duration-200 ease-out rounded-full hover:bg-fernGreen'
				>
					<MdAdd className='text-2xl' />
				</Link>
			</div>
			<div className='flex flex-wrap gap-2 py-5 cursor-default'>
				{skills?.map((skill) => (
					<span key={skill.id} className='sm:px-5 sm:py-2 px-3 py-1 text-sm font-medium lowercase rounded-full bg-[#424242] text-textSecondary'>
						{skill.category}
					</span>
				))}
			</div>
		</section>
	);
}
