import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import PropTypes from "prop-types";
import EditHeadProfileModal from "../Modal/EditHeadProfileModal";
import placeholderPhotoProfile from "../../assets/images/placeholderPhotoProfile.png";
import bgCardProfile from "../../assets/images/bgCardProfile.jpg";
import {
  createMyPhotoProfileAsync,
  updateMyPhotoProfileAsync,
} from "../../states/myProfile/myProfileThunk";
import { useDispatch, useSelector } from "react-redux";

export default function HeadProfile({ myProfile }) {
  const dispatch = useDispatch();
  const { loading, loadingPhoto } = useSelector((state) => state.myProfile);
  const [showModal, setShowModal] = useState(false);

  const onSubmitPhotoProfileChange = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append("photo_profile", file);

      dispatch(createMyPhotoProfileAsync(formData));
    }

    return;
  };

  const onEditPhotoProfileChange = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append("photo_profile", file);
      formData.append("_method", "PUT");

      dispatch(
        updateMyPhotoProfileAsync({ formData, id: myProfile.photo_profile.id })
      );
    }

    return;
  };
  return (
    <section>
      <div className="relative group">
        <img
          src={
            loading || myProfile.background_photo === null
              ? bgCardProfile
              : myProfile.background_photo.background_photo
          }
          alt="bg card"
          className="object-cover w-full h-40 sm:h-56 sm:rounded-t-xl"
        />
        <label
          htmlFor="image"
          className="opacity-0 group-hover:opacity-100 hover:cursor-pointer absolute right-3 top-1 md:right-1 md:top-0 bg-slate-900 p-1 rounded-full"
        >
         <MdModeEdit className="text-3xl text-slate-300" />

        </label>
      </div>
      <div className="flex items-start justify-between px-3 pb-5 lg:px-10 bg-eerieBlack sm:rounded-b-xl">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative group rounded-full h-32 w-32 md:w-40 -top-20 sm:-top-14">
            <img
              src={
                loadingPhoto || myProfile.photo_profile === null
                  ? placeholderPhotoProfile
                  : myProfile.photo_profile.photo_profile
              }
              alt="avatar profile"
              className={`${
                loadingPhoto ? "animate-pulse" : ""
              } h-full w-full rounded-full border-4 border-eerieBlack`}
            />
            <label
              htmlFor="image"
              className="opacity-0 absolute  text-2xl right-5 bottom-2 md:bottom-3 group-hover:opacity-100 hover:cursor-pointer bg-slate-900 p-1 rounded-full"
            >
              <MdModeEdit className=" text-slate-300 " />
            </label>
          <div className="relative rounded-full h-36 w-52 -top-20 sm:-top-14">
          <img
            src={myProfile === null || myProfile.photo_profile === null ? placeholderPhotoProfile : myProfile.photo_profile.photo_profile}
            alt="avatar profile"
            className="relative object-cover border-4 rounded-full h-36 w-36 border-eerieBlack"
          />
         <label htmlFor='image' className="hover:cursor-pointer"> <MdModeEdit className="absolute text-3xl font-bold right-5 bottom-3 text-slate-200 " /></label>
         <input type="file" hidden accept='image/*' id="image" onChange={myProfile === null || myProfile.photo_profile === null || myProfile.photo_profile.photo_profile === null ? onSubmitPhotoProfileChange : onEditPhotoProfileChange } />
          </div>
          <div className="flex flex-col w-full gap-2 -mt-20 sm:mt-2">
            <div className="flex flex-col">
              <p className="text-2xl font-medium w-fit">
                {loading ? "" : myProfile.name}
              </p>
              <p className="text-xs text-textSecondary w-fit">{`${
                loading ||
                myProfile.biodata === null ||
                myProfile.biodata.role === null
                  ? ""
                  : myProfile.biodata.role
              }`}</p>
            </div>
            <p className="text-sm md:text-lg text-textPrimary">
              {loading || myProfile.biodata === null
                ? ""
                : myProfile.biodata.headline}
            </p>
            <p className="flex items-center gap-1 mt-2 text-sm text-textSecondary">
              {loading ||
              myProfile.biodata === null ||
              myProfile.biodata.location === null ? (
                ""
              ) : (
                <>
                  <FaLocationDot className="text-red-600" />{" "}
                  {myProfile.biodata.location}
                </>
              )}
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="p-2 mt-3 text-2xl transition-all duration-200 ease-out rounded-full hover:bg-fernGreen"
        >
          <MdModeEdit />
        </button>
      </div>
      {showModal && (
        <EditHeadProfileModal
          openModal={showModal}
          setOpenModal={setShowModal}
          myProfile={myProfile}
        />
      )}
      <input
          type="file"
          hidden
          accept="image/*"
          id="image"
          onChange={
            loading ||
            myProfile.photo_profile === null ||
            myProfile.photo_profile.photo_profile === null
              ? onSubmitPhotoProfileChange
              : onEditPhotoProfileChange
          }
        />
    </section>
  );
}

HeadProfile.propTypes = {
  myProfile: PropTypes.instanceOf(Object),
};
