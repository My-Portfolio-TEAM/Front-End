import React from 'react';
import Navbar from '../components/Navbar/Index';
import Profile from '../components/Card/Profile';

export default function SuggestedDeveloperPage() {
  const userProfiles = [
    {
      id: 1,
      name: 'Rudiger Burkins',
      role: 'Fullstack Developer',
      image:
        'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background:
        'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      post: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }],
      portfolio: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    },
    {
      id: 2,
      name: 'Bennie Roh',
      role: 'Project Manager',
      image:
        'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background:
        'https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      post: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
      portfolio: [{ id: 1 }, { id: 2 }, { id: 3 }]
    },
    {
      id: 3,
      name: 'Patin Beteta',
      role: 'Front-End Developer',
      image:
        'https://images.unsplash.com/photo-1564636866914-cf34c1b21880?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background:
        'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      post: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      portfolio: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    },
    {
      id: 4,
      name: 'Ham Drenner',
      role: 'Web Developer',
      image:
        'https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      background:
        'https://images.unsplash.com/photo-1561212044-bac5ef688a07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      post: [{ id: 1 }, { id: 2 }],
      portfolio: [{ id: 1 }, { id: 2 }, { id: 3 }]
    }
  ];

  return (
    <section className=" text-textPrimary">
      <Navbar />
      <div className="container flex w-full pb-16 sm:py-10 2xl:px-52">
        <div className="w-full p-2 rounded-md sm:p-10 bg-eerieBlack">
          <h1>Trending people based on your activity</h1>
          <div className="grid flex-1 w-full grid-cols-1 gap-5 mt-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
            {userProfiles?.map((userProfile) => (
              <Profile
                key={userProfile.id}
                {...userProfile}
                useBorder="border rounded-xl border-[#464646]"
              >
                See Profile
              </Profile>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
