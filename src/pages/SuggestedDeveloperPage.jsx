import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Index';
import { useDispatch, useSelector } from 'react-redux';
import MostActiveUsersProfile from '../components/Card/MostActiveUsersProfile';
import { getMostActiveUsers } from '../states/user/userThunk';
import { myProfileAsync } from '../states/myProfile/myProfileThunk';

export default function SuggestedDeveloperPage() {
const dispatch = useDispatch();
 const { mostActiveUsers } = useSelector((state) => state.users);
 const { myProfile } = useSelector((state) => state.myProfile);


 useEffect(() => {
  dispatch(getMostActiveUsers());
  dispatch(myProfileAsync());
  window.scrollTo(0, 0);
 }, []);
  return (
    <section className=" text-textPrimary">
      <Navbar myProfile={myProfile} />
      <div className="container flex w-full pb-16 sm:py-10 2xl:px-52">
        <div className="w-full p-2 rounded-md sm:p-10 bg-eerieBlack">
          <h1>Most Active Users</h1>
          <div className="grid flex-1 w-full grid-cols-1 gap-5 mt-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
            {
            mostActiveUsers.length > 0 ? mostActiveUsers.map((userProfile) => (
              <MostActiveUsersProfile
                key={userProfile.id}
                userProfile={userProfile}
                useBorder="border rounded-xl border-[#464646]"
              >
                {userProfile.id === myProfile.id ? 'My Profile' : 'See Profile'}
              </MostActiveUsersProfile>
            )) : ''
          
          
          }
          </div>
        </div>
      </div>
    </section>
  );
}
