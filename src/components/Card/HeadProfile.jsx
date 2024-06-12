import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdModeEdit } from 'react-icons/md';
import PropTypes from 'prop-types';
import EditHeadProfileModal from '../Modal/EditHeadProfileModal';

export default function HeadProfile({ name, image, background, location, role, headline }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <img
        src={background}
        alt="bg card"
        className="object-cover w-full h-40 sm:h-56 sm:rounded-t-xl"
      />
      <div className="flex items-start justify-between px-3 pb-5 lg:px-10 bg-eerieBlack sm:rounded-b-xl">
        <div className="flex flex-col gap-3 sm:flex-row">
          <img
            src={image}
            alt="avatar profile"
            className="relative object-cover border-4 rounded-full h-36 w-36 -top-20 sm:-top-10 border-eerieBlack"
          />
          <div className="flex flex-col w-full gap-2 -mt-20 sm:mt-2">
            <div className="flex flex-col">
              <p className="text-2xl font-medium w-fit">{name}</p>
              <p className="text-xs text-textSecondary w-fit">({role})</p>
            </div>
            <p className="text-sm md:text-lg text-textPrimary">{headline}</p>
            <p className="flex items-center gap-1 mt-2 text-sm text-textSecondary">
              <FaLocationDot className="text-red-600" /> {location}
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="p-2 mt-3 text-2xl transition-all duration-200 ease-out rounded-full hover:bg-fernGreen"
        >
          <MdModeEdit />
        </button>
      </div>
      {showModal && (
        <EditHeadProfileModal
          openModal={showModal}
          setOpenModal={setShowModal}
          profile={{ name, image, role, headline, location }}
        />
      )}
    </section>
  );
}

HeadProfile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  headline: PropTypes.string
};
