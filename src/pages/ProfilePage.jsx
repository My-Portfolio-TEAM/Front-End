import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Index";
import HeadProfile from "../components/Card/HeadProfile";
import AboutProfile from "../components/Card/AboutProfile";
import SkillsProfile from "../components/Card/SkillsProfile";
import Post from "../components/Card/Post";
import Portfolio from "../components/Card/Portfolio";
import { useLocation, useNavigate } from "react-router-dom";
import PostDetailModal from "../components/Modal/PostDetailModal";
import { myProfileAsync } from "../states/myProfile/myProfileThunk";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../states/authUser/authUserThunk";
import { ToastContainer } from "react-toastify";
import { skillsAsync } from "../states/skills/skillsThunk";
import { portfoliosAsync } from "../states/portfolios/portfoliosThunk";
import WriteProgressInputModal from "../components/Modal/WriteProgressInputModal";
import PortfolioInputModal from "../components/Modal/PortfolioInputModal";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Index';
import HeadProfile from '../components/Card/HeadProfile';
import AboutProfile from '../components/Card/AboutProfile';
import SkillsProfile from '../components/Card/SkillsProfile';
import Post from '../components/Card/Post';
import Portfolio from '../components/Card/Portfolio';
import avatarProfile from '../assets/images/profile-pic (4).png';
import bgCardProfile from '../assets/images/bgCardProfile.jpg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import PostDetailModal from '../components/Modal/PostDetailModal';
import { myProfileAsync } from '../states/myProfile/myProfileThunk';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../states/authUser/authUserThunk';
import { ToastContainer } from 'react-toastify';
import { skillsAsync } from '../states/skills/skillsThunk';
import { portfoliosAsync } from '../states/portfolios/portfoliosThunk';
import WriteProgressInputModal from '../components/Modal/WriteProgressInputModal';
import PortfolioInputModal from '../components/Modal/PortfolioInputModal';
import { getMyPostAsync } from '../states/posts/postThunk';
import Loading from '../components/Loading';

export default function ProfilePage() {
  const { myProfile } = useSelector((state) => state.myProfile);
  const { skills } = useSelector((state) => state.skills);
  const { portfolios } = useSelector((state) => state.portfolios);
  const { posts } = useSelector((state) => state.posts);
  const [activeSession, setActiveSession] = useState('Portfolio');
  const [openStudyModal, setOpenStudyModal] = useState(false);
  const [openPortfolioModal, setOpenPortfolioModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();

  const isModalPostDetailOpen = location.pathname.startsWith('/profile/api/post');

  const handlePostClick = (postId) => {
    navigate(`/profile/api/post/${postId}`);
  };

  const handleLogout = () => {
    dispatch(logoutUser({ navigate }));
  };

  const onCloseStudyModal = () => {
    setOpenStudyModal(!openStudyModal);
  };

  const onClosePortfolioModal = () => {
    setOpenPortfolioModal(!openPortfolioModal);
  };

  useEffect(() => {
    if (openStudyModal || openPortfolioModal) {
      document.body.style.overflow = 'hiddAen';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openStudyModal, openPortfolioModal]);

  useEffect(() => {
    dispatch(myProfileAsync());
    dispatch(portfoliosAsync());
    dispatch(skillsAsync());
    dispatch(getMyPostAsync());
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-center" theme="dark" pauseOnHover={false} autoClose={3000} />
      <section className="text-textPrimary">
        <div className="sticky top-0 z-50">
          <Navbar
            myProfile={myProfile}
            openModalStudy={onCloseStudyModal}
            isOpenModalStudyInput={openStudyModal}
            openModalPortfolio={onClosePortfolioModal}
            isOpenModalPortfolioInput={openPortfolioModal}
            logout={handleLogout}
          />
        </div>
        <div className="container sm:mt-5 lg:px-52">
          <HeadProfile myProfile={myProfile} />
          <AboutProfile myProfile={myProfile} />
          <SkillsProfile myProfile={myProfile} skills={skills} />
          <div className="flex flex-col px-3 mt-10 mb-40 sm:px-5 lg:px-10">
            <div className="flex gap-10">
              <button
                type="button"
                className="p-0 border-gray-500 rounded-s-xl"
                onClick={() => setActiveSession('Portfolio')}>
                <h1
                  className={`text-xl font-medium cursor-pointer ${
                    activeSession === 'Portfolio' ? 'border-b-2 border-textSecondary' : ''
                  }`}>
                  Portfolio
                </h1>
              </button>
              <button
                type="button"
                className="p-0 rounded-e-xl"
                onClick={() => setActiveSession('Posts')}>
                <h1
                  className={`text-xl font-medium cursor-pointer ${
                    activeSession === 'Posts' ? 'border-b-2 border-textSecondary' : ''
                  }`}>
                  Posts
                </h1>
              </button>
            </div>
            <div className="my-5">
              {activeSession === 'Posts' ? (
                <div className="grid w-full gap-5 sm:grid-cols-2">
                  {posts.length > 0
                    ? posts.map((post) => (
                        <Post
                          key={post.id}
                          page={'/profile'}
                          {...post}
                          handleClick={() => handlePostClick(post.id)}
                        />
                      ))
                    : ''}
                </div>
              ) : (
                <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {portfolios.length > 0
                    ? portfolios.map((portfolio) => <Portfolio key={portfolio.id} {...portfolio} />)
                    : ''}
                </div>
              )}
            </div>
          </div>
        </div>
        {openStudyModal && (
          <WriteProgressInputModal closeModal={onCloseStudyModal} myProfile={myProfile} />
        )}
        {openPortfolioModal && (
          <PortfolioInputModal myProfile={myProfile} closeModal={onClosePortfolioModal} />
        )}
        {isModalPostDetailOpen &&
          posts
            .filter((post) => post.id === +id)
            .map((post) => <PostDetailModal key={post.id} {...post} />)}
      </section>
    </>
  );
}
