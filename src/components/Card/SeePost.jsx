import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function SeePost() {
	const [selectedPost, setSelectedPost] = useState('All Post');


	return (
		<Dropdown
			dismissOnClick
			renderTrigger={() => (
				<span className='flex items-end flex-1 gap-0 px-3 mt-2 text-sm font-semibold cursor-pointer md:px-1 w-fit hover:text-textSecondary text-textPrimary'>
					{selectedPost}
					<MdOutlineKeyboardArrowDown className='text-xl' />
				</span>
			)}
			className='flex gap-10 shadow-2xl border-2 border-[#262626] cursor-pointer bg-searchInput text-textPrimary'
		>
			<Dropdown.Item
				onClick={() => setSelectedPost('All Post')}
				className={`text-textPrimary ${selectedPost === 'All Post' ? 'bg-eerieBlack' : ''}`}
			>
				All Post
			</Dropdown.Item>
			<Dropdown.Item
				onClick={() => setSelectedPost('Your Post')}
				className={`text-textPrimary ${
					selectedPost === 'Your Post' ? 'bg-eerieBlack' : ''
				}`}
			>
				Your Post
			</Dropdown.Item>
		</Dropdown>
	);
}
