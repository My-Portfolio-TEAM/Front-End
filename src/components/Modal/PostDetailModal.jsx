import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import PostDetail from '../Card/PostDetail';
import PropTypes from 'prop-types';

export default function PostDetailModal({ id, image, avatar, name, role, description }) {
  const [previousUrl, setPreviousUrl] = useState('/');
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => {
    if (previousUrl.includes('/profile')) {
      navigate(`/profile/${name}`);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    setPreviousUrl(location.pathname);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-textPrimary">
      <PostDetail
        id={id}
        image={image}
        avatar={avatar}
        name={name}
        role={role}
        description={description}
      />
      <button className="absolute right-5 top-5" onClick={closeModal}>
        <IoClose className="text-3xl text-textSecondary" />
      </button>
    </div>
  );
}

PostDetailModal.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
