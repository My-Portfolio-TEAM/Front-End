import React, { useEffect, useRef, useState } from 'react';
import iconLove from '../../assets/icons/iconLove-outlined.png';
import iconComment from '../../assets/icons/messages.png';
import { IoIosSend } from 'react-icons/io';
import PropTypes from 'prop-types';
import 'animate.css';
import { formattedDate, formattedTime } from '../../utils';
import placeholderPhotoProfile from '../../assets/images/placeholderPhotoProfile.png';

export default function PostDetail({
  id,
  image,
  content,
  user,
  created_at,
  updated_at,
  comments,
  post_up_votes
}) {
  const [, setComment] = useState('');
  const commentInputRef = useRef(null);
  const desc = { __html: content };

  const onCommentChangeHandler = (e) => {
    setComment(e.target.innerText);
  };

  const onFocusCommentInput = () => {
    commentInputRef.current.focus();
  };

  return (
    <section
      className={`container flex h-[40rem] w-96  ${image ? 'sm:w-[70rem]' : ''} rounded-md text-textPrimary bg-eerieBlack`}>
      <div className="flex min-w-full">
        <div className={`items-center hidden w-full h-full  ${image ? 'md:flex' : 'hidden'}`}>
          <img src={image} alt="post" className="object-contain w-full h-full " />
        </div>
        <div className="relative flex flex-col w-full md:max-w-[25rem]">
          <div className="absolute left-0 z-20 flex items-center w-full gap-3 px-4 py-2">
            <img
              src={user.photo_profile?.photo_profile || placeholderPhotoProfile}
              alt="img post"
              className="object-cover w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-sm font-medium text-textPrimary">{user.name}</p>
              <p className="text-[10px] font-medium text-textSecondary">{user?.biodata?.role}</p>
            </div>
          </div>
          <div className="px-4 py-2 overflow-auto border-y border-[#262626] h-full mt-12">
            <div dangerouslySetInnerHTML={desc} className="text-[13px] text-textPrimary" />
            <div className="flex gap-2 mt-2 text-[10px] font-medium">
              <p className="text-[#A9A9A9]">{formattedDate(created_at)}</p>
              <p className="text-[#7A7A7A]">•</p>
              <p className="text-[#A9A9A9]">{formattedTime(updated_at)}</p>
            </div>
            <p className="my-5 text-xs font-medium text-textSecondary">
              {comments.length} comments
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-1">
                <img
                  src={comments?.user?.photo_profile?.photo_profile || placeholderPhotoProfile}
                  alt="img post"
                  className="object-cover w-8 h-8 rounded-full"
                />
                <div>
                  <div className="w-full px-3 py-2 rounded-md bg-searchInput">
                    <div className="flex flex-col mb-2">
                      <div className="flex items-baseline gap-2">
                        <p className="text-sm font-medium text-textPrimary">{comments?.name}</p>
                        <p className="text-xs text-[#7A7A7A]">•</p>
                        <p className="text-[10px] text-[#A9A9A9]">
                          {formattedTime(comments?.updated_at)}
                        </p>
                      </div>
                      <p className="text-[9px] font-medium text-textSecondary">
                        {comments?.user?.biodata?.role}
                      </p>
                    </div>
                    <p className="text-xs">{comments?.content}</p>
                  </div>
                  <div className="flex gap-1 my-2 text-xs text-textPrimary">
                    <button>Like</button>
                    <p className="text-xs text-[#7A7A7A]">•</p>
                    <p>{comments?.post_up_votes?.length}</p>
                    <p className="text-xs mx-2 text-[#eaeaea]">|</p>
                    <button>Reply</button>
                    <p className="text-xs text-[#7A7A7A]">•</p>
                    <p>{comments?.comments?.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-4 pb-2 text-xs">
            <div className="flex gap-5 my-3 sm:px-0 text-textPrimary">
              <div className="flex items-center gap-1">
                <button>
                  <img src={iconLove} alt="" className="w-7" />
                </button>
                <p>{post_up_votes.length} Likes</p>
              </div>
              <div className="flex items-center gap-2 ">
                <button onClick={onFocusCommentInput}>
                  <img src={iconComment} alt="" className="w-6" />
                </button>
                <p>{comments.length}</p>
              </div>
            </div>
            <div className="flex items-center w-full gap-2">
              <img
                src="https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img post"
                className="object-cover rounded-full w-7 h-7"
              />
              <div className="flex gap-2">
                <div
                  ref={commentInputRef}
                  className="py-2 px-3 w-[17rem] sm:w-[32rem] md:w-72 text-[10px] bg-searchInput border border-[#262626] rounded-md text-textPrimary overflow-auto h-10 cursor-text text-sm  placeholder:text-textPrimary focus:border-[#2d2d2d] focus:outline focus:ring-0"
                  contentEditable
                  onInput={onCommentChangeHandler}
                  data-placeholder="Add a comment"
                />
                <button className="bg-searchInput transition-all duration-300 hover:text-ufoGreen right-0 px-3 me-10 w-auto rounded-md py-2 h-10 text-lg font-medium hover:shadow text-[#A9A9A9] hover:bg-opacity-70">
                  <IoIosSend title="Send" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

PostDetail.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  post_up_votes: PropTypes.arrayOf(PropTypes.object).isRequired
};
