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

export default function HomePage() {
  const [, setSelectedPost] = useState('All Posts');
  const [openStudyModal, setOpenStudyModal] = useState(false);
  const [openPortfolioModal, setOpenPortfolioModal] = useState(false);

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const { myProfile, postCount, portfolioCount, loading } = useSelector((state) => state.myProfile);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const dummyPost = [
    {
      id: 1,
      image:
        'https://cdn.dribbble.com/users/3416941/screenshots/17650222/media/d4c34ea0063ed6452c856bee545dabe9.jpg?resize=1000x750&vertical=center',
      avatar:
        'https://cdn.dribbble.com/users/3416941/avatars/normal/2d977a5554be90b8731ce1ea8336de38.jpg?1700737919',
      name: 'Rakib Kowshar',
      role: 'UI/UX Designer',
      description:
        "Finance Web Design ! Hope you guys like it 😊 <br/> <br/>  Have project? I'm available for hire 	<br/>	hellorakib.rk@gmail.com <br /> <br/> For quick inquiry feel free to add me on: <br /> Skype | Instagram | Linkedin <br /> <br/> - <br /> <br/> Follow Orizon Design: <br/> Behance | Youtube | Twitter | www.orizon.co"
    },

    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1527239441953-caffd968d952?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      avatar:
        'https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Amed Fauzi',
      role: 'Software Engineer',
      description:
        '🚀 Today, I dived into the Document Object Model (DOM)! <br/> <br/> 🌐Understanding the DOM is crucial for dynamically manipulating web pages. <br/> <br />🔧 Key Learnings: <br/>1. getElementById: Select an element by its ID. <br/> 2. getElementsByClassName (with indexes): Select elements by their class name. <br/> 3. getElementsByTagName (with indexes): Select elements by their tag name <br/> 4. querySelector(): Select the first element that matches a CSS selector <br/> 5. querySelectorAll(): Select all elements that match a CSS selector.'
    },
    {
      id: 3,
      image:
        'https://cdn.dribbble.com/users/3537484/screenshots/14113218/media/75bb06b20fb9f243a3aa19f57c6399cc.png',
      avatar:
        'https://images.unsplash.com/profile-1589915428192-fcbd7546baaeimage?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      name: 'Dmitriy Kazarov',
      role: 'Web Designer',
      description:
        '🚀 Landing page - mail client Press "L" if you like it. 💙 ___ I am available for new projects. 👋🏻 Drop me a line at mitya.sinichkin.fl@gmail.com'
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      avatar:
        'https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'William Splatt',
      role: 'Fullstack Developer',
      description:
        'Saya merasa sangat bersemangat dan penuh harapan sekarang ini. Setelah banyak belajar dan berlatih, saya akhirnya mendapatkan client freelance pertama saya.Ini adalah langkah besar bagi saya, sebuah validasi atas semua kerja keras yangtelah saya lakukan. Saya merasa sangat berterima kasih atas kesempatan ini danberjanji untuk memberikan yang terbaik. <br /><br/> Saya percaya bahwa dengan skill yangsaya miliki sekarang, saya dapat memberikan nilai yang besar bagi client saya.Saya telah menghabiskan banyak waktu untuk mempelajari dan memperdalam berbagai teknologi dan teknik pemrograman, dan sekarang saya siap untuk menerapkannya dalam proyek nyata. Namun, ini hanyalah awal. <br /> <br /> Saya berharap bahwa denganpengalaman ini, saya akan dapat menarik lebih banyak client di masa depan. Sayaberencana untuk terus belajar dan berkembang, sehingga saya dapat terusmeningkatkan layanan yang saya tawarkan. Saya sangat bersemangat tentang apayang akan datang dan saya tidak sabar untuk melihat di mana perjalanan ini akan membawa saya.'
    }
  ];

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const onCloseStudyModal = () => {
    setOpenStudyModal(!openStudyModal);
  };

  const onClosePortfolioModal = () => {
    setOpenPortfolioModal(!openPortfolioModal);
  };

  const postDetail = dummyPost.find((post) => post.id === +id);
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
                postCount={postCount}
                portfolioCount={portfolioCount}
                loading={loading}>
                My Profile
              </Profile>
            </div>
            <div className="flex flex-col gap-2 mx-0 sm:flex-1 sm:gap-2 sm:mx-4 lg:mx-5 2xl:mx-10">
              <Search />
              <SeePost postType={setSelectedPost} />
              {dummyPost.map((post) => (
                <Post
                  key={post.id}
                  page={'/'}
                  {...post}
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
        {isModalPostDetailOpen &&
          dummyPost.map((post) => <PostDetailModal key={post.id} {...postDetail} />)}
      </div>
    </>
  );
}
