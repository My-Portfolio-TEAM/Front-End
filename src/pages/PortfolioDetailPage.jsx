import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Index';
import React from 'react';
import { CgArrowLeft } from 'react-icons/cg';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  return (
    <section>
      <Navbar />
      <div className="container flex justify-center py-2">
        {portfolios
          .filter((portfolio) => portfolio.id === +id)
          .map((portfolio) => (
            <div
              key={portfolio.id}
              className="flex flex-col items-center gap-5 p-5 mx-52 rounded-xl"
            >
              <div className="w-full">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-3 transition-opacity w-fit hover:opacity-80"
                >
                  <CgArrowLeft className="text-2xl text-textPrimary" />
                  <h1 className="font-medium text-textPrimary">Go back to profile</h1>
                </button>
              </div>
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-[30rem]  object-cover rounded-lg"
              />
              <div className="flex items-center justify-between w-full">
                <div className="flex w-full gap-2 px-2 sm:px-0">
                  <p className="text-[12px] font-medium text-[#A9A9A9]">24 Mei 2024</p>
                  <p className="text-[12px] font-medium text-[#7A7A7A]">•</p>
                  <p className="text-[12px] font-medium text-[#A9A9A9]">20 mins ago</p>
                </div>
                <div className="flex justify-end w-full ">
                  <Link
                    to={portfolio.url}
                    className="flex gap-2 font-semibold text-ufoGreen hover:text-opacity-80"
                  >
                    View Portfolio
                    <FaExternalLinkAlt className="text-xs text-[#A9A9A9] " />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col h-full gap-3 text-textPrimary">
                <h1 className="text-2xl font-semibold">{portfolio.title}</h1>
                <p className="text-base leading-relaxed text-chineseWhite">
                  {portfolio.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
