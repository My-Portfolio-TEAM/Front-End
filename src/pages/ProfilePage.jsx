import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Index";
import HeadProfile from "../components/Card/HeadProfile";
import AboutProfile from "../components/Card/AboutProfile";
import SkillsProfile from "../components/Card/SkillsProfile";
import Post from "../components/Card/Post";
import Portfolio from "../components/Card/Portfolio";
import avatarProfile from "../assets/images/profile-pic (4).png";
import bgCardProfile from "../assets/images/bgCardProfile.jpg";
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

export default function ProfilePage() {
  const { myProfile } = useSelector((state) => state.myProfile);
  const { skills } = useSelector((state) => state.skills);
  const { portfolios } = useSelector((state) => state.portfolios);
  const [activeSession, setActiveSession] = useState("Portfolio");

  const [openStudyModal, setOpenStudyModal] = useState(false);
  const [openPortfolioModal, setOpenPortfolioModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isModalPostDetailOpen = location.pathname.startsWith(
    "/profile/api/post"
  );

  const handlePostClick = (postId) => {
    navigate(`/profile/api/post/${postId}`);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const onCloseStudyModal = () => {
    setOpenStudyModal(!openStudyModal);
  };

  const onClosePortfolioModal = () => {
    setOpenPortfolioModal(!openPortfolioModal);
  };

  const dummyPost = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "William Splatt",
      role: "Fullstack Developer",
      description:
        "Saya merasa sangat bersemangat dan penuh harapan sekarang ini. Setelah banyak belajar dan berlatih, saya akhirnya mendapatkan client freelance pertama saya.Ini adalah langkah besar bagi saya, sebuah validasi atas semua kerja keras yangtelah saya lakukan. Saya merasa sangat berterima kasih atas kesempatan ini danberjanji untuk memberikan yang terbaik. <br /><br/> Saya percaya bahwa dengan skill yangsaya miliki sekarang, saya dapat memberikan nilai yang besar bagi client saya.Saya telah menghabiskan banyak waktu untuk mempelajari dan memperdalam berbagaiteknologi dan teknik pemrograman, dan sekarang saya siap untuk menerapkannyadalam proyek nyata. Namun, ini hanyalah awal. <br /> <br /> Saya berharap bahwa denganpengalaman ini, saya akan dapat menarik lebih banyak client di masa depan. Sayaberencana untuk terus belajar dan berkembang, sehingga saya dapat terusmeningkatkan layanan yang saya tawarkan. Saya sangat bersemangat tentang apayang akan datang dan saya tidak sabar untuk melihat di mana perjalanan ini akan membawa saya.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "William Splatt",
      role: "Fullstack Developer",
      description:
        "Saya merasa sangat bersemangat dan penuh harapan sekarang ini. Setelah banyak belajar dan berlatih, saya akhirnya mendapatkan client freelance pertama saya.Ini adalah langkah besar bagi saya, sebuah validasi atas semua kerja keras yangtelah saya lakukan. Saya merasa sangat berterima kasih atas kesempatan ini danberjanji untuk memberikan yang terbaik. <br /><br/> Saya percaya bahwa dengan skill yangsaya miliki sekarang, saya dapat memberikan nilai yang besar bagi client saya.Saya telah menghabiskan banyak waktu untuk mempelajari dan memperdalam berbagaiteknologi dan teknik pemrograman, dan sekarang saya siap untuk menerapkannyadalam proyek nyata. Namun, ini hanyalah awal. <br /> <br /> Saya berharap bahwa denganpengalaman ini, saya akan dapat menarik lebih banyak client di masa depan. Sayaberencana untuk terus belajar dan berkembang, sehingga saya dapat terusmeningkatkan layanan yang saya tawarkan. Saya sangat bersemangat tentang apayang akan datang dan saya tidak sabar untuk melihat di mana perjalanan ini akan membawa saya.",
    },
  ];

  useEffect(() => {
    if (openStudyModal || openPortfolioModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openStudyModal, openPortfolioModal]);

  useEffect(() => {
    dispatch(myProfileAsync());
    dispatch(portfoliosAsync());
    dispatch(skillsAsync());
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-center"
        theme="dark"
        pauseOnHover={false}
        autoClose={3000}
      />
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
                onClick={() => setActiveSession("Portfolio")}
              >
                <h1
                  className={`text-xl font-medium cursor-pointer ${
                    activeSession === "Portfolio"
                      ? "border-b-2 border-textSecondary"
                      : ""
                  }`}
                >
                  Portfolio
                </h1>
              </button>
              <button
                type="button"
                className="p-0 rounded-e-xl"
                onClick={() => setActiveSession("Posts")}
              >
                <h1
                  className={`text-xl font-medium cursor-pointer ${
                    activeSession === "Posts"
                      ? "border-b-2 border-textSecondary"
                      : ""
                  }`}
                >
                  Posts
                </h1>
              </button>
            </div>
            <div className="my-5">
              {activeSession === "Posts" ? (
                <div className="grid w-full gap-5 sm:grid-cols-2">
                  {dummyPost.map((post) => (
                    <Post
                      key={post.id}
                      {...post}
                      id={post.id}
                      myProfile={myProfile}
                      handleClick={handlePostClick}
                      page={"/profile"}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {portfolios.length > 0
                    ? portfolios.map((portfolio) => (
                        <Portfolio key={portfolio.id} {...portfolio} />
                      ))
                    : ""}
                </div>
              )}
            </div>
          </div>
        </div>
        {openStudyModal && (
          <WriteProgressInputModal
            closeModal={onCloseStudyModal}
            myProfile={myProfile}
          />
        )}
        {openPortfolioModal && (
          <PortfolioInputModal
            myProfile={myProfile}
            closeModal={onClosePortfolioModal}
          />
        )}
        {isModalPostDetailOpen &&
          dummyPost.map((post) => <PostDetailModal key={post.id} {...post} />)}
      </section>
    </>
  );
}
