import React, { useState } from 'react';
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

export default function ProfilePage() {
  const [activeSession, setActiveSession] = useState('Portfolio');
  const navigate = useNavigate();
  const location = useLocation();

  const { name } = useParams();
  const decodeName = decodeURIComponent(name);

  const isModalPostDetailOpen = location.pathname.startsWith('/profile/api/post');

  const handlePostClick = (postId) => {
    navigate(`/profile/api/post/${postId}`);
  };

  const portfolios = [
    {
      id: 1,
      url: 'https://unsplash.com/s/photos/portfolio',
      image:
        'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'My portfolio-1',
      description:
        'Selamat datang di portfolio saya! Nama saya John Doe, dan saya adalah seorang Desainer Grafis berpengalaman dalam desain digital dan cetak. Di sini, Anda akan menemukan berbagai proyek yang telah saya kerjakan, mencerminkan kemampuan dan dedikasi saya terhadap kualitas serta inovasi. Salah satu proyek terbaru yang saya kerjakan adalah Rebranding Acme Corp. Proyek ini melibatkan pembaruan identitas merek perusahaan, termasuk logo, palet warna, dan desain materi pemasaran. Dalam proyek ini, saya berperan sebagai Desainer Utama di mana saya menggunakan keterampilan desain grafis dan komunikasi visual untuk memberikan kontribusi yang signifikan. Hasil akhirnya sangat memuaskan dengan peningkatan visibilitas merek dan respons positif dari klien.'
    },
    {
      id: 2,
      url: 'https://unsplash.com/s/photos/portfolio',
      image:
        'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'My portfolio-2',
      description: 'This is my second portfolio'
    },
    {
      id: 3,
      url: 'https://unsplash.com/s/photos/portfolio',
      image:
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'My portfolio-3',
      description: 'This is my third portfolio'
    },
    {
      id: 4,
      url: 'https://unsplash.com/s/photos/portfolio',
      image:
        'https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'My portfolio-4',
      description: 'This is my fourth portfolio'
    }
  ];

  const userProfiles = [
    {
      id: 1,
      name: 'Rudiger Burkins',
      role: 'Fullstack Developer',
      image:
        'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background:
        'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'UI/UX Designer | Front-End Developer | Back-End Developer',
      location: 'Jakarta, Indonesia'
    },
    {
      id: 2,
      name: 'Bennie Roh',
      role: 'Project Manager',
      image:
        'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background:
        'https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Project Manager | Scrum Master | Product Owner',
      location: 'New York, Unites States'
    },
    {
      id: 3,
      name: 'Patin Beteta',
      role: 'Front-End Developer',
      image:
        'https://images.unsplash.com/photo-1564636866914-cf34c1b21880?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background:
        'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Security Engineer | Front-End Developer | Back-End Developer',
      location: 'Depok, Indonesia'
    },
    {
      id: 4,
      name: 'Ham Drenner',
      role: 'Web Developer',
      image:
        'https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background:
        'https://images.unsplash.com/photo-1561212044-bac5ef688a07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Web Developer Enthusiast',
      location: 'Bukit Tinggi, Malaysia'
    },
    {
      id: 5,
      name: 'Muhamad Alif Pahreza',
      role: 'Software Engineer',
      image: avatarProfile,
      background: bgCardProfile,
      headline: 'Software Engineer at Tokopedia, Google since 2018',
      location: 'Banjarmasin, Indonesia'
    }
  ];

  const dummyPost = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      avatar:
        'https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'William Splatt',
      role: 'Fullstack Developer',
      description:
        'Saya merasa sangat bersemangat dan penuh harapan sekarang ini. Setelah banyak belajar dan berlatih, saya akhirnya mendapatkan client freelance pertama saya.Ini adalah langkah besar bagi saya, sebuah validasi atas semua kerja keras yangtelah saya lakukan. Saya merasa sangat berterima kasih atas kesempatan ini danberjanji untuk memberikan yang terbaik. <br /><br/> Saya percaya bahwa dengan skill yangsaya miliki sekarang, saya dapat memberikan nilai yang besar bagi client saya.Saya telah menghabiskan banyak waktu untuk mempelajari dan memperdalam berbagaiteknologi dan teknik pemrograman, dan sekarang saya siap untuk menerapkannyadalam proyek nyata. Namun, ini hanyalah awal. <br /> <br /> Saya berharap bahwa denganpengalaman ini, saya akan dapat menarik lebih banyak client di masa depan. Sayaberencana untuk terus belajar dan berkembang, sehingga saya dapat terusmeningkatkan layanan yang saya tawarkan. Saya sangat bersemangat tentang apayang akan datang dan saya tidak sabar untuk melihat di mana perjalanan ini akan membawa saya.'
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      avatar:
        'https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'William Splatt',
      role: 'Fullstack Developer',
      description:
        'Saya merasa sangat bersemangat dan penuh harapan sekarang ini. Setelah banyak belajar dan berlatih, saya akhirnya mendapatkan client freelance pertama saya.Ini adalah langkah besar bagi saya, sebuah validasi atas semua kerja keras yangtelah saya lakukan. Saya merasa sangat berterima kasih atas kesempatan ini danberjanji untuk memberikan yang terbaik. <br /><br/> Saya percaya bahwa dengan skill yangsaya miliki sekarang, saya dapat memberikan nilai yang besar bagi client saya.Saya telah menghabiskan banyak waktu untuk mempelajari dan memperdalam berbagaiteknologi dan teknik pemrograman, dan sekarang saya siap untuk menerapkannyadalam proyek nyata. Namun, ini hanyalah awal. <br /> <br /> Saya berharap bahwa denganpengalaman ini, saya akan dapat menarik lebih banyak client di masa depan. Sayaberencana untuk terus belajar dan berkembang, sehingga saya dapat terusmeningkatkan layanan yang saya tawarkan. Saya sangat bersemangat tentang apayang akan datang dan saya tidak sabar untuk melihat di mana perjalanan ini akan membawa saya.'
    }
  ];

  return (
    <section className="text-textPrimary">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="container sm:mt-5 lg:px-52">
        {userProfiles
          .filter((user) => user.name === decodeName)
          .map((user) => (
            <HeadProfile key={user.id} {...user} />
          ))}
        <AboutProfile />
        <SkillsProfile />
        <div className="flex flex-col px-3 mt-10 mb-40 sm:px-5 lg:px-10">
          <div className="flex gap-10">
            <button
              type="button"
              className="p-0 border-gray-500 rounded-s-xl"
              onClick={() => setActiveSession('Portfolio')}
            >
              <h1
                className={`text-xl font-medium cursor-pointer ${
                  activeSession === 'Portfolio' ? 'border-b-2 border-textSecondary' : ''
                }`}
              >
                Portfolio
              </h1>
            </button>
            <button
              type="button"
              className="p-0 rounded-e-xl"
              onClick={() => setActiveSession('Posts')}
            >
              <h1
                className={`text-xl font-medium cursor-pointer ${
                  activeSession === 'Posts' ? 'border-b-2 border-textSecondary' : ''
                }`}
              >
                Posts
              </h1>
            </button>
          </div>
          <div className="my-5">
            {activeSession === 'Posts' ? (
              <div className="grid w-full gap-5 sm:grid-cols-2">
                {dummyPost.map((post) => (
                  <Post
                    key={post.id}
                    {...post}
                    id={post.id}
                    handleClick={handlePostClick}
                    page={'/profile'}
                  />
                ))}
              </div>
            ) : (
              <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {portfolios.map((portfolio) => (
                  <Portfolio key={portfolio.id} {...portfolio} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalPostDetailOpen &&
        dummyPost.map((post) => <PostDetailModal key={post.id} {...post} />)}
    </section>
  );
}
