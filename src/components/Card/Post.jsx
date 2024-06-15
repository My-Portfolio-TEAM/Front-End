import React from 'react';
import iconLove from '../../assets/icons/iconLove-outlined.png';
import iconComment from '../../assets/icons/messages.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useExpand } from '../../hooks/useExpand';
import { formattedDate, formattedTime } from '../../utils';
import placeholderPhotoProfile from '../../assets/images/placeholderPhotoProfile.png';

export default function Post({
  id,
  content,
  image,
  post_up_votes,
  comments,
  user,
  created_at,
  updated_at,
  handleClick,
  page
}) {
  const { isExpanded, isTruncated, textRef, toggleExpanded } = useExpand();
  const navigate = useNavigate();
  const desc = { __html: content };

  const handleToggleExpanded = () => {
    if (page === '/') {
      toggleExpanded(!isExpanded);
    } else if (page === `/profile`) {
      navigate(`/profile/api/post/${id}`);
    }
  };

  return (
    <section className="w-auto py-3 rounded-md h-fit sm:p-4 bg-eerieBlack sm:rounded-xl">
      <div className="flex items-center gap-3 px-2 sm:px-0">
        <img
          src={
            user.photo_profile === null
              ? placeholderPhotoProfile
              : user.photo_profile.photo_profile
          }
          alt="img post"
          className="object-cover w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-base font-medium text-textPrimary">{user.name}</p>
          <p className="text-[10px] font-medium text-textSecondary">
            {user.biodata == null ? '' : user.biodata.role}
          </p>
        </div>
      </div>

      <div className="my-3">
        <img src={image} className="rounded-none lg:w-full lg:h-full sm:rounded-lg" alt="" />
        <div className="flex gap-2 px-2 my-3 sm:px-0">
          <p className="text-[12px] font-medium text-[#A9A9A9]">{formattedDate(created_at)}</p>
          <p className="text-[12px] font-medium text-[#7A7A7A]">•</p>
          <p className="text-[12px] font-medium text-[#A9A9A9]">{formattedTime(updated_at)}</p>
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
            className="text-[#A9A9A9] text-sm px-2 sm:px-0 font-normal">
            {isExpanded ? 'See less' : '...See more'}
          </button>
        )}
      </div>

      <div className="w-full h-[2px] bg-[#262626]" />

      <div className="flex gap-5 px-2 my-2 sm:px-0 text-textPrimary">
        <div className="flex items-center gap-1">
          <button>
            <img src={iconLove} alt="" className="w-7" />
          </button>
          <p>{post_up_votes.length}</p>
        </div>
        <button type="button" className="flex items-center gap-2" onClick={() => handleClick(id)}>
          <img src={iconComment} alt="" className="w-6" />
          <p>{comments.length}</p>
        </button>
      </div>
    </section>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  content: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  post_up_votes: PropTypes.instanceOf(Array).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired
};
