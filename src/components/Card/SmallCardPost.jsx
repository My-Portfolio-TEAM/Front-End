import React from 'react';
import iconLoveFilled from '../../assets/icons/iconLove-filled.png';
import iconComment from '../../assets/icons/messages.png';
//import { Link } from 'react-router-dom';

export default function SmallCardPost() {
	return (
		<section className='w-full border rounded-xl border-[#464646]'>
			<img
				src='https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt=''
				className='object-cover w-full h-40 rounded-t-xl'
			/>
			<div className='px-3 py-2'>
				<div className='flex gap-2'>
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
				<p className='text-sm text-[#EAEAEA] py-3'>
					Saya sangat senang Karena telah selesai membuat sebuah website sistem kelola
					barang menggunakan php dengan fitur crud
				</p>
				<div className='w-full h-[2px] bg-[#262626]' />
				<div className='flex gap-5 my-2 text-textPrimary'>
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
			</div>
		</section>
	);
}
