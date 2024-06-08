import React from 'react';
import iconLoveFilled from '../../assets/icons/iconLove-filled.png';
import iconComment from '../../assets/icons/messages.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useExpand } from '../../hooks/useExpand';

export default function Post({ id, page }) {
	const {isExpanded, isTruncated, textRef, toggleExpanded} = useExpand();
	const navigate = useNavigate();

	const handleToggleExpanded = () => {
		if (page === '/') {
			toggleExpanded(!isExpanded);
		} else if (page === '/profile') {
			navigate(`/post-detail/${id}`);
		}
	};

	return (
		<article className='w-auto py-3 rounded-md sm:p-4 bg-eerieBlack sm:rounded-xl'>
			<div className='flex items-center gap-3 px-2 sm:px-0'>
				<img
					src='https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='img post'
					className='object-cover w-10 h-10 rounded-full'
				/>
				<div>
					<p className='text-base font-medium text-textPrimary'>William Splatt</p>
					<p className='text-[10px] font-medium text-textSecondary'>
						Fullstack Developer
					</p>
				</div>
			</div>

			<div className='my-3'>
				<img
					src='https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					className='rounded-none cursor-pointer lg:w-full lg:h-full sm:rounded-lg bg-size'
					alt=''
				/>
				<div className='flex gap-2 px-2 my-3 sm:px-0'>
					<p className='text-[12px] font-medium text-[#A9A9A9]'>24 Mei 2024</p>
					<p className='text-[12px] font-medium text-[#7A7A7A]'>•</p>
					<p className='text-[12px] font-medium text-[#A9A9A9]'>20 mins ago</p>
				</div>
				<p
					ref={textRef}
					className={`text-sm text-[#eaeaea] leading-5 px-2 sm:px-0 ${
						isExpanded ? '' : 'line-clamp-2'
					}`}
				>
					Saya merasa sangat bersemangat dan penuh harapan sekarang ini. Setelah banyak
					belajar dan berlatih, saya akhirnya mendapatkan client freelance pertama saya.
					Ini adalah langkah besar bagi saya, sebuah validasi atas semua kerja keras yang
					telah saya lakukan. <br/> <br/> Saya merasa sangat berterima kasih atas kesempatan ini dan
					berjanji untuk memberikan yang terbaik. Saya percaya bahwa dengan skill yang
					saya miliki sekarang, saya dapat memberikan nilai yang besar bagi client saya.
					Saya telah menghabiskan banyak waktu untuk mempelajari dan memperdalam berbagai
					teknologi dan teknik pemrograman, dan sekarang saya siap untuk menerapkannya
					dalam proyek nyata. Namun, ini hanyalah awal. <br/> <br/> Saya berharap bahwa dengan
					pengalaman ini, saya akan dapat menarik lebih banyak client di masa depan. Saya
					berencana untuk terus belajar dan berkembang, sehingga saya dapat terus
					meningkatkan layanan yang saya tawarkan. Saya sangat bersemangat tentang apa
					yang akan datang dan saya tidak sabar untuk melihat di mana perjalanan ini akan
					membawa saya.
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

			<div className='w-full h-[2px] bg-[#262626]' />

			<div className='flex gap-5 px-2 my-2 sm:px-0 text-textPrimary'>
				<div className='flex items-center gap-1'>
					<button>
						<img src={iconLoveFilled} alt='' className='w-7' />
					</button>
					<p>349</p>
				</div>
				<div className='flex items-center gap-2'>
					<button>
						<img src={iconComment} alt='' className='w-6' />
					</button>
					<p>2</p>
				</div>
			</div>
		</article>
	);
}

Post.propTypes = {
	id: PropTypes.number.isRequired,
	page: PropTypes.string.isRequired,
};