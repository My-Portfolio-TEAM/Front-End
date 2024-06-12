import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import EditAboutProfileModal from '../Modal/EditAboutProfileModal';

export default function AboutProfile() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="px-3 py-5 mt-3 sm:px-5 sm:mt-5 lg:px-10 bg-eerieBlack sm:rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">About</h1>
        <button
          onClick={() => setShowModal(true)}
          className="p-2 text-2xl transition-all duration-200 ease-out rounded-full hover:bg-fernGreen"
        >
          <MdModeEdit />
        </button>
      </div>
      <div className="flex flex-col gap-8 py-5 lg:gap-10 2xl:flex-row">
        <p className="text-sm text-justify text-textSecondary">
          I am passionate about UI/UX design and front-end development, My technical skills include
          a mastery of JavaScript and React which allows me to create intuitive and engaging user
          interfaces. I am constantly exploring and developing my front-end and UI/UX skills. <br />
          <br /> My goal is to become a Front-End Developer who can contribute to projects that make
          a real impact. I am always eager to learn, adapt and grow in this dynamic field.
        </p>
        <div className="flex flex-col flex-wrap gap-3 mr-10">
          <div className="flex flex-col flex-wrap gap-2 w-72">
            {/*<h3 className='text-xl font-medium'>LinkedIn</h3>*/}
            <a
              href="https://www.linkedin.com/in/alifpahreza"
              className="flex items-center gap-2 text-base break-all hover:underline text-textSecondary"
              target="_blank"
            >
              <BsLinkedin />
              www.linkedin.com/in/alifpahreza
            </a>
          </div>
          <div className="flex flex-col gap-2">
            {/*<h3 className='text-xl'>Github</h3>*/}
            <a
              href="https://github.com/Eunlip"
              className="flex items-center gap-2 text-base break-all hover:underline w-fit text-textSecondary"
              target="_blank"
            >
              <BsGithub />
              Eunlip
            </a>
          </div>
        </div>
      </div>
      {showModal && <EditAboutProfileModal openModal={showModal} setOpenModal={setShowModal} />}
    </section>
  );
}
