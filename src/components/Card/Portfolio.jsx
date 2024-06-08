import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useExpand } from '../../hooks/useExpand';
import PropTypes from 'prop-types';

export default function Portfolio({ id, title, image, description, url }) {
	const { isExpanded, isTruncated, textRef } = useExpand();
	const navigate = useNavigate();

	const handleToggleExpanded = () => {
		navigate(`/portfolio-detail/${id}`);
	};

	return (
		<section  className='relative block h-52 group sm:h-80 lg:h-72'>
			<Link to={url}>
				<img
					alt='images/portfolio'
					src={image}
					className='absolute inset-0 object-cover w-full h-full transition-all duration-500 rounded-md opacity-75 group-hover:opacity-30'
				/>

				<div className='relative p-4 sm:p-6 lg:p-8'>
					<p className='text-xl font-bold text-textPrimary sm:text-2xl'>{title}</p>
				</div>
			</Link>
			<div className='mx-3 mt-16 sm:m-5 sm:mt-36 lg:mt-24'>
				<div className='transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>
					<p
						ref={textRef}
						className={`text-sm text-[#eaeaea] leading-5 px-2 sm:px-0 ${
							isExpanded ? '' : 'line-clamp-2'
						}`}
					>
						{description}
					</p>
					{isTruncated && (
						<button
							onClick={handleToggleExpanded}
							className='text-[#A9A9A9] text-sm px-2 sm:px-0 font-normal'
						>
							{isExpanded ? 'See less' : '...See more'}
						</button>
					)}
				</div>
			</div>
		</section>
	);
}

Portfolio.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};