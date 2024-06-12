import React from 'react';
import LoginInput from '../components/Input/LoginInput';
import logoNoIcon from '../assets/icons/logoNoIcon.png';
import tagline from '../assets/images/tagline.png';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="w-screen h-screen auth-page">
      <div className="justify-between lg:flex">
        <div className="absolute flex-1 h-screen p-5 sm:p-10 lg:static lg:block">
          <img src={logoNoIcon} alt="logo" className="w-36 sm:w-48 lg:w-32" />
          <div className="items-center justify-center hidden h-full lg:flex ">
            <img src={tagline} alt="tagline" className="w-64" />
          </div>
        </div>
        <div className="flex flex-1 flex-col h-screen w-full lg:border-s lg:border-s-fernGreen bg-[#0F0F13] bg-opacity-85 rounded-none lg:rounded-s-[2rem] items-center justify-center">
          <LoginInput />
          <div className="absolute text-lg font-medium bottom-14 sm:bottom-64 lg:bottom-14 text-chineseWhite">
            New User?{' '}
            <Link
              to="/register"
              className="font-bold cursor-pointer hover:underline text-fernGreen"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
