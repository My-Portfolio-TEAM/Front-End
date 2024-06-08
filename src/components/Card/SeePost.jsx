import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function SeePost({ postType }) {
	const [selectedPost, setSelectedPost] = useState('All Posts');

	const selectPost = (post) => {
		setSelectedPost(post);
		postType(post);
	};

	return (
		<Dropdown
			dismissOnClick
			renderTrigger={() => (
				<span className='flex gap-0 px-3 mt-2 text-sm font-semibold cursor-pointer md:px-1 w-fit hover:text-textSecondary text-textPrimary'>
					{selectedPost}
					<MdOutlineKeyboardArrowDown className={'text-xl transition-all'} />
				</span>
			)}
			className='shadow-2xl border-[#262626] cursor-pointer bg-eerieBlack text-textPrimary'
		>
			<Dropdown.Item
				style={{ backgroundColor: '#1A1C20' }}
				onClick={() => selectPost('All Posts')}
				className={`text-textPrimary ${
					selectedPost === 'All Posts' ? 'border-s border-ufoGreen' : ''
				}`}
			>
				All Posts
			</Dropdown.Item>
			<Dropdown.Item
				style={{ backgroundColor: '#1A1C20' }}
				onClick={() => selectPost('My Posts')}
				className={`text-textPrimary ${
					selectedPost === 'My Posts' ? 'border-s border-ufoGreen' : ''
				}`}
			>
				My Posts
			</Dropdown.Item>
		</Dropdown>
	);
}

SeePost.propTypes = {
	postType: PropTypes.func.isRequired,
};
