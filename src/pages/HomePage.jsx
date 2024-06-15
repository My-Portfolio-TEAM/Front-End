import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Index';
import Profile from '../components/Card/Profile';
import SeePost from '../components/Card/SeePost';
import Post from '../components/Card/Post';
import Search from '../components/Input/SearchInput';
import SuggestedDeveloper from '../components/Card/SuggestedDeveloper';
import MostLikedPost from '../components/Card/MostLikedPost';
import avatarProfile from '../assets/images/profile-pic (4).png';
import bgCardProfile from '../assets/images/bgCardProfile.jpg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import PostDetailModal from '../components/Modal/PostDetailModal';
import WriteProgressInputModal from '../components/Modal/WriteProgressInputModal';
import PortfolioInputModal from '../components/Modal/PortfolioInputModal';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../states/authUser/authUserThunk';
import Loading from '../components/Loading';
import { myProfileAsync } from '../states/myProfile/myProfileThunk';
import { postsAsync } from '../states/posts/postThunk';

export default function HomePage() {
  const [, setSelectedPost] = useState('All Posts');
  const [openStudyModal, setOpenStudyModal] = useState(false);
  const [openPortfolioModal, setOpenPortfolioModal] = useState(false);

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const { myProfile, loading } = useSelector((state) => state.myProfile);
  const { posts } = useSelector((state) => state.posts);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const handleLogout = () => {
    dispatch(logoutUser({navigate}));
  };

  const onCloseStudyModal = () => {
    setOpenStudyModal(!openStudyModal);
  };

  const onClosePortfolioModal = () => {
    setOpenPortfolioModal(!openPortfolioModal);
  };

  const isModalPostDetailOpen = location.pathname.startsWith('/api/posts/');

  const handlePostClick = (postId) => {
    navigate(`/api/posts/${postId}`);
  };

  useEffect(() => {
    if (openStudyModal || openPortfolioModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openStudyModal, openPortfolioModal]);

  useEffect(() => {
    dispatch(myProfileAsync());
    dispatch(postsAsync());
  }, []);

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {status === 'loading' && <Loading />}
      <div className="bg-chineseBlack">
        <div className="sticky top-0 z-10">
          <Navbar
            openModalStudy={onCloseStudyModal}
            isOpenModalStudyInput={openStudyModal}
            openModalPortfolio={onClosePortfolioModal}
            isOpenModalPortfolioInput={openPortfolioModal}
            logout={handleLogout}
            myProfile={myProfile}
          />
        </div>
        <div className="py-0 mb-20 sm:px-5 lg:container sm:py-5 lg:px-10 2xl:px-20">
          <div className="flex flex-col sm:flex-row">
            <div className="h-full sm:w-72 xl:w-70 sm:sticky top-28">
              <Profile
                myProfile={myProfile}
                loading={loading}>
                My Profile
              </Profile>
            </div>
            <div className="flex flex-col gap-2 mx-0 sm:flex-1 sm:gap-2 sm:mx-4 lg:mx-5 2xl:mx-10">
              <Search />
              <SeePost postType={setSelectedPost} />
              {posts.map((post) => (
                <Post
                  key={post.id}
                  page={'/'}
                  {...post}
                  myProfile={myProfile}
                  handleClick={() => handlePostClick(post.id)}
                />
              ))}
            </div>
            <div className="flex-col hidden gap-5 xl:flex">
              <SuggestedDeveloper />
              <MostLikedPost />
            </div>
          </div>
        </div>
        {openStudyModal && (
          <WriteProgressInputModal closeModal={onCloseStudyModal} myProfile={myProfile} />
        )}
        {openPortfolioModal && (
          <PortfolioInputModal myProfile={myProfile} closeModal={onClosePortfolioModal} />
        )}
        {isModalPostDetailOpen && posts > 0
          ? posts
              .filter((post) => post.id === +id)
              .map((post) => <PostDetailModal key={post.id} {...post} />)
          : ''}
      </div>
    </>
  );
}
