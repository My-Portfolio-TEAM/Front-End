import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import PostDetail from '../Card/PostDetail';
import PropTypes from 'prop-types';

export default function PostDetailModal({
  id,
  name,
  image,
  content,
  user,
  created_at,
  updated_at,
  comments,
  post_up_votes
}) {
  const [previousUrl, setPreviousUrl] = useState('/');
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => {
    if (previousUrl.includes('/profile')) {
      navigate(`/profile/myProfile`);
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
        content={content}
        user={user}
        created_at={created_at}
        updated_at={updated_at}
        comments={comments}
        post_up_votes={post_up_votes}
      />
      <button className="absolute right-5 top-5" onClick={closeModal}>
        <IoClose className="text-3xl text-textSecondary" />
      </button>
    </div>
  );
}

PostDetailModal.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  post_up_votes: PropTypes.arrayOf(PropTypes.object).isRequired
};
