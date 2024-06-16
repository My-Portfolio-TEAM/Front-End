import React from "react";
import iconLoveFilled from "../../assets/icons/iconLove-filled.png";
import iconComment from "../../assets/icons/messages.png";
import placeholderPhotoProfile from "../../assets/images/placeholderPhotoProfile.png";
import PropTypes from "prop-types";

export default function SmallCardPost({ post }) {
  return (
    <section className="w-full border rounded-xl border-[#464646]">
      {post.image === null ? null : (
        <img
          src={post.image}
          alt=""
          className="object-cover w-full h-40 rounded-t-xl"
        />
      )}
      <div className="px-3 py-2">
        <div className="flex gap-2">
          <img
            src={
              post.user.photo_profile === null
                ? placeholderPhotoProfile
                : post.user.photo_profile.photo_profile
            }
            alt="img post"
            className="object-cover w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-base font-medium text-textPrimary">
              {post.user.name}
            </p>
            <p className="text-[10px] font-medium text-textSecondary">
              {post.user.biodata === null || post.user.biodata.role === null ? null : post.user.biodata.role}
            </p>
          </div>
        </div>
        <p className="text-sm text-[#EAEAEA] py-3">
         {post.content}
        </p>
        <div className="w-full h-[2px] bg-[#262626]" />
        <div className="flex gap-5 my-2 text-textPrimary">
          <div className="flex items-center gap-1">
            <button>
              <img src={iconLoveFilled} alt="" className="w-7" />
            </button>
            <p>{post.post_up_votes_count}</p>
          </div>
          <div className="flex items-center gap-2">
            <button>
              <img src={iconComment} alt="" className="w-6" />
            </button>
            <p>{post.comments_count}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

SmallCardPost.propTypes = {
  post: PropTypes.instanceOf(Object),
};
