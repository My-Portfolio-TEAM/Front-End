import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiMail } from 'react-icons/hi';
import { IoMdLock } from 'react-icons/io';
import useInput from '../../hooks/useInput';
import { Button } from 'flowbite-react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

export default function RegisterInput({ register }) {
	const [name, onNameChange] = useInput('');
	const [email, onEmailChange] = useInput('');
	const [password, onPasswordChange] = useInput('');
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='flex flex-col gap-10 w-full p-5 sm:p-0 sm:w-[28rem]'>
			<h1 className='text-3xl font-bold sm:text-4xl text-chineseWhite'>Create an Account</h1>
			<form className='flex flex-col gap-6'>
				<div>
					<div className='mb-2'>
						<label htmlFor='name' className='text-lg text-chineseWhite'>
							Name
						</label>
					</div>
					<div className='relative'>
						<FaUserAlt className='absolute top-[1px] left-0 z-10 m-3 text-xl' />
						<input
							type='text'
							id='name'
							className='w-full py-3 border rounded-md ps-12 bg-chineseWhite placeholder:text-[#A9A9A9]'
							value={name}
							onChange={onNameChange}
							placeholder='johndoe'
							required
						/>
					</div>
				</div>
				<div>
					<div className='mb-2'>
						<label htmlFor='email' className='text-lg text-chineseWhite'>
							Email Address
						</label>
					</div>
					<div className='relative'>
						<HiMail className='absolute top-[1px] left-0 z-10 m-3 text-2xl' />
						<input
							type='email'
							id='email'
							className='w-full py-3 border rounded-md ps-12 bg-chineseWhite placeholder:text-[#A9A9A9]'
							value={email}
							onChange={onEmailChange}
							placeholder='johndoe@example.com'
							required
						/>
					</div>
				</div>
				<div>
					<div className='block mb-2'>
						<label htmlFor='password' className='text-lg text-chineseWhite'>
							Password
						</label>
					</div>
					<div className='relative flex'>
						<IoMdLock className='absolute top-[1px] left-0 z-10 m-3 text-2xl' />
						<input
							type={showPassword ? 'text' : 'password'}
							id='password'
							className='w-full py-3 border rounded-md ps-12 pe-14 bg-chineseWhite placeholder:text-[#A9A9A9]'
							value={password}
							onChange={onPasswordChange}
							placeholder='••••••'
							required
						/>
						<Button
							onClick={toggleShowPassword}
							className='absolute top-[2px] right-0 rounded-none ring-0 focus:ring-0'
						>
							{showPassword ? (
								<BsEye className='text-2xl text-eerieBlack' />
							) : (
								<BsEyeSlash className='text-2xl text-eerieBlack' />
							)}
						</Button>
					</div>
				</div>
				<Button
					type='submit'
					size='sm'
					onClick={() => register({ name, email, password })}
					className='mt-5 bg-fernGreen'
				>
					<span className='text-lg font-semibold'>Login</span>
				</Button>
			</form>
		</div>
	);
}

RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
};
