import React, { useState, useRef, useEffect } from 'react';
import iconLoveFilled from '../../assets/icons/iconLove-filled.png';
import iconComment from '../../assets/icons/messages.png';

export default function Post() {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isTruncated, setIsTruncated] = useState(false);
	const textRef = useRef(null);

	const toggleExpanded = () => {
		setIsExpanded(!isExpanded);
	};

	useEffect(() => {
		const element = textRef.current;
		if (element) {
			const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
			const maxHeight = lineHeight * 2;
			setIsTruncated(element.scrollHeight > maxHeight);
		}
	}, [textRef, isExpanded]);

	return (
		<article className='py-2 rounded-none sm:p-4 lg:w-full bg-eerieBlack sm:rounded-xl'>
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
					className='w-full h-auto rounded-none sm:rounded-lg bg-size'
					alt=''
				/>
				<div className='flex gap-2 px-2 my-3 sm:px-0'>
					<p className='text-[12px] font-medium text-[#A9A9A9]'>24 Mei 2024</p>
					<p className='text-[12px] font-medium text-[#7A7A7A]'>•</p>
					<p className='text-[12px] font-medium text-[#A9A9A9]'>20 mins ago</p>
				</div>
				<p
					ref={textRef}
					className={`text-sm text-chineseWhite px-2 sm:px-0 ${isExpanded ? '' : 'line-clamp-2'}`}
				>
					Saya sangat senang karena saya akhirnya mendapatkan client freelance pertama
					saya dan semoga dengan skill saya yang sekarang saya bisa lebih banyak
					mendapatkan client
				</p>
				{isTruncated && (
					<button onClick={toggleExpanded} className='text-[#A9A9A9] px-2 sm:px-0 font-normal'>
						{isExpanded ? 'See less' : 'See more'}
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
