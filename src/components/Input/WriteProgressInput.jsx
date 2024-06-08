import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import { IoClose, IoAlertCircleSharp } from 'react-icons/io5';
import { FileInput, Button } from 'flowbite-react';
import PropTypes from 'prop-types';

export default function WriteProgressInput({ closeModal: closeParentModal, id, img, name, role }) {
	const [content, setContent] = useState('');
	const [contentNotification, setContentNotification] = useState('');
	const [fileNotification, setFileNotification] = useState('');
	const [modalStatus, setModalStatus] = useState('open');
	const [file, setFile] = useState(null);
	const inputRef = useRef(null);

	const closeModal = () => {
		setModalStatus('closing');
	};

	const onFileChangeHandler = (e) => {
		setFile(e.target.files[0]);
		if (!e.target.files[0]) {
			setFileNotification('Please upload an image');
		} else {
			setFileNotification('');
		}
	};

	const onContentChangeHandler = (e) => {
		setContent(e.target.innerText);
		if (e.target.innerText.trim() !== '') {
			setContentNotification('');
		} else {
			setContentNotification('Content must not be empty or space');
		}
	};

	const onShareClickHandler = () => {
		if (content.trim() === '') {
			setContentNotification('Content must not be empty or space');
		} else if (!file) {
			setFileNotification('Please upload an image');
		} else {
			setModalStatus('closing');
		}
	};

	useEffect(() => {
		if (modalStatus === 'closing') {
			setTimeout(() => {
				closeModal();
				closeParentModal();
			}, 500);
		}
	}, [modalStatus, closeModal, closeParentModal]);

	useEffect(() => {
		if (modalStatus === 'open' && inputRef.current) {
			inputRef.current.focus();
		}
	}, [modalStatus]);

	return (
		<section
			className={`w-full h-full sm:w-[40rem] mx-auto sm:my-16 rounded-xl text-textPrimary bg-eerieBlack animate__animated ${
				modalStatus === 'open'
					? 'animate__fadeInDown animate__fast'
					: 'animate__fadeOutUp animate__faster'
			}`}
		>
			<div className='p-5'>
				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center gap-2'>
						<img
							src={img}
							alt='img post'
							className='object-cover w-10 h-10 rounded-full'
						/>
						<div>
							<p className='text-base font-medium text-textPrimary'>{name}</p>
							<p className='text-[10px] font-medium text-textSecondary'>
								{role}
							</p>
						</div>
					</div>
					<button
						type='button'
						className='p-1 text-2xl transition-all duration-200 ease-out rounded-full cursor-pointer hover:bg-fernGreen'
						onClick={closeModal}
						onKeyDown={() => {}}
						tabIndex={0}
						aria-label='Close'
					>
						<IoClose className='text-xl text-textSecondary' />
					</button>
				</div>
				<div className='mt-5 mb-3'>
					<div
						ref={inputRef}
						className='p-5 overflow-auto border-none rounded outline-none h-52 bg-searchInput'
						contentEditable
						onInput={onContentChangeHandler}
						data-placeholder='Write your progress here...'
					/>
					{contentNotification && (
						<div className='flex gap-1 mt-1'>
							<IoAlertCircleSharp className='text-sm text-red-500' />
							<p className='text-xs font-medium text-red-400 '>{contentNotification}</p>
						</div>
					)}
				</div>
				<div className='flex flex-col gap-2 mb-8'>
					<div>
						<FileInput
							color='success'
							id='image-upload'
							onChange={onFileChangeHandler}
							className='bg-searchInput'
						/>
						<p className='mt-2 text-xs font-medium text-[#A9A9A9]'>PNG, JPG, or JPEG</p>
						{fileNotification && (
							<div className='flex gap-1 mt-1'>
								<IoAlertCircleSharp className='text-sm text-red-500' />
								<p className='text-xs font-medium text-red-400 '>{fileNotification}</p>
							</div>
						)}
					</div>
				</div>
				<Button
					type='button'
					fullSized
					color=''
					onClick={onShareClickHandler}
					className='font-semibold bg-fernGreen active:outline-none active:ring-none hover:bg-opacity-80'
				>
					Share
				</Button>
			</div>
		</section>
	);
}

WriteProgressInput.propTypes = {
	closeModal: PropTypes.func,
	id: PropTypes.number.isRequired,
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
};
