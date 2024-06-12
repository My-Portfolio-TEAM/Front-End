import React, { useRef, useState } from 'react';
import iconLoveFilled from '../../assets/icons/iconLove-filled.png';
import iconComment from '../../assets/icons/messages.png';
import { IoIosSend } from 'react-icons/io';
import PropTypes from 'prop-types';
import 'animate.css';

export default function PostDetail({ id, avatar, image, name, role, description }) {
  const [, setComment] = useState('');
  const commentInputRef = useRef(null);
  const desc = { __html: description };

  const onCommentChangeHandler = (e) => {
    setComment(e.target.innerText);
  };

  const onFocusCommentInput = () => {
    commentInputRef.current.focus();
  };

  return (
    <section className="container flex h-[40rem] w-96 sm:w-[70rem] rounded-md text-textPrimary bg-eerieBlack animate__animated  animate__fast">
      <div className="flex min-w-full">
        <div className="items-center hidden w-full h-full md:flex">
          <img src={image} alt="post" className="object-contain w-full h-full " />
        </div>
        <div className="relative flex flex-col w-full md:max-w-[25rem]">
          <div className="absolute left-0 z-20 flex items-center w-full gap-3 px-4 py-2">
            <img src={avatar} alt="img post" className="object-cover w-8 h-8 rounded-full" />
            <div className="flex flex-col">
              <p className="text-sm font-medium text-textPrimary">{name}</p>
              <p className="text-[10px] font-medium text-textSecondary">{role}</p>
            </div>
          </div>
          <div className="px-4 py-2 overflow-auto border-y border-[#262626] h-full mt-12">
            <div dangerouslySetInnerHTML={desc} className="text-[13px] text-textPrimary" />
            <div className="flex gap-2 mt-2 text-[10px] font-medium">
              <p className="text-[#A9A9A9]">24 Mei 2024</p>
              <p className="text-[#7A7A7A]">•</p>
              <p className="text-[#A9A9A9]">20 mins ago</p>
            </div>
            <p className="my-5 text-xs font-medium text-textSecondary">2 comments</p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-1">
                <img
                  src="https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img post"
                  className="object-cover w-8 h-8 rounded-full"
                />
                <div>
                  <div className="w-full px-3 py-2 rounded-md bg-searchInput">
                    <div className="flex flex-col mb-2">
                      <div className="flex items-baseline gap-2">
                        <p className="text-sm font-medium text-textPrimary">William Splatt</p>
                        <p className="text-xs text-[#7A7A7A]">•</p>
                        <p className="text-[10px] text-[#A9A9A9]">20 mins ago</p>
                      </div>
                      <p className="text-[9px] font-medium text-textSecondary">
                        Front-End Developer
                      </p>
                    </div>
                    <p className="text-xs">
                      Awesome. But i think we can create more intere1ng prototyping not only dark
                      and light mode. What do you think?
                    </p>
                  </div>
                  <div className="flex gap-1 my-2 text-xs text-textPrimary">
                    <button>Like</button>
                    <p className="text-xs text-[#7A7A7A]">•</p>
                    <p>20</p>
                    <p className="text-xs mx-2 text-[#eaeaea]">|</p>
                    <button>Reply</button>
                    <p className="text-xs text-[#7A7A7A]">•</p>
                    <p>1</p>
                  </div>
                  <div className="flex gap-1 my-3">
                    <img
                      src="https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="img post"
                      className="object-cover w-8 h-8 rounded-full"
                    />
                    <div className="w-full px-3 py-2 rounded-md bg-searchInput">
                      <div className="flex flex-col mb-2">
                        <div className="flex items-baseline gap-2">
                          <p className="text-sm font-medium text-textPrimary">William Splatt</p>
                          <p className="text-xs text-[#7A7A7A]">•</p>
                          <p className="text-[10px] text-[#A9A9A9]">20 mins ago</p>
                        </div>
                        <p className="text-[9px] font-medium text-textSecondary">
                          Front-End Developer
                        </p>
                      </div>
                      <p className="text-xs">
                        Imagine if Pepsi made an ad: "why you should stop drinking Coca-Cola"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <img
                  src="https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img post"
                  className="object-cover w-8 h-8 rounded-full"
                />
                <div>
                  <div className="w-full px-3 py-2 rounded-md bg-searchInput">
                    <div className="flex flex-col mb-2">
                      <div className="flex items-baseline gap-2">
                        <p className="text-sm font-medium text-textPrimary">William Splatt</p>
                        <p className="text-xs text-[#7A7A7A]">•</p>
                        <p className="text-[10px] text-[#A9A9A9]">20 mins ago</p>
                      </div>
                      <p className="text-[9px] font-medium text-textSecondary">
                        Front-End Developer
                      </p>
                    </div>
                    <p className="text-xs">
                      Awesome. But i think we can create more interesting prototyping not only dark
                      and light mode. What do you think?
                    </p>
                  </div>
                  <div className="flex gap-1 my-2 text-xs text-textPrimary">
                    <button>Like</button>
                    <p className="text-xs text-[#7A7A7A]">•</p>
                    <p>20</p>
                    <p className="text-xs mx-2 text-[#eaeaea]">|</p>
                    <button>Reply</button>
                    <p className="text-xs text-[#7A7A7A]">•</p>
                    <p>1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 px-4 pb-2 text-xs">
            <div className="flex gap-5 my-3 sm:px-0 text-textPrimary">
              <div className="flex items-center gap-1">
                <button>
                  <img src={iconLoveFilled} alt="" className="w-7" />
                </button>
                <p>349 Likes</p>
              </div>
              <div className="flex items-center gap-2 ">
                <button onClick={onFocusCommentInput}>
                  <img src={iconComment} alt="" className="w-6" />
                </button>
                <p>2</p>
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
  avatar: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
