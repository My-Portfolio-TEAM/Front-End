import React from 'react';
import iconLoveFilled from '../../assets/icons/iconLove-filled.png';
import iconComment from '../../assets/icons/messages.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useExpand } from '../../hooks/useExpand';

export default function Post({ id, page, handleClick, image, avatar, name, role, description }) {
  const { isExpanded, isTruncated, textRef, toggleExpanded } = useExpand();
  const navigate = useNavigate();
  const desc = { __html: description };

  const handleToggleExpanded = () => {
    if (page === '/') {
      toggleExpanded(!isExpanded);
    } else if (page === `/profile`) {
      navigate(`/profile/api/post/${id}`);
    }
  };

  return (
    <section className="w-auto py-3 rounded-md sm:p-4 bg-eerieBlack sm:rounded-xl">
      <div className="flex items-center gap-3 px-2 sm:px-0">
        <img src={avatar} alt="img post" className="object-cover w-10 h-10 rounded-full" />
        <div>
          <p className="text-base font-medium text-textPrimary">{name}</p>
          <p className="text-[10px] font-medium text-textSecondary">{role}</p>
        </div>
      </div>

      <div className="my-3">
        <img src={image} className="rounded-none lg:w-full lg:h-full sm:rounded-lg" alt="" />
        <div className="flex gap-2 px-2 my-3 sm:px-0">
          <p className="text-[12px] font-medium text-[#A9A9A9]">24 Mei 2024</p>
          <p className="text-[12px] font-medium text-[#7A7A7A]">•</p>
          <p className="text-[12px] font-medium text-[#A9A9A9]">20 mins ago</p>
        </div>
        <div
          dangerouslySetInnerHTML={desc}
          ref={textRef}
          className={`text-sm text-[#eaeaea] leading-5 px-2 sm:px-0 ${
            isExpanded ? '' : 'line-clamp-2'
          }`}
        />
        {isTruncated && (
          <button
            onClick={handleToggleExpanded}
            className="text-[#A9A9A9] text-sm px-2 sm:px-0 font-normal"
          >
            {isExpanded ? 'See less' : '...See more'}
          </button>
        )}
      </div>

      <div className="w-full h-[2px] bg-[#262626]" />

      <div className="flex gap-5 px-2 my-2 sm:px-0 text-textPrimary">
        <div className="flex items-center gap-1">
          <button>
            <img src={iconLoveFilled} alt="" className="w-7" />
          </button>
          <p>349</p>
        </div>
        <button type="button" className="flex items-center gap-2" onClick={() => handleClick(id)}>
          <img src={iconComment} alt="" className="w-6" />
          <p>2</p>
        </button>
      </div>
    </section>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
