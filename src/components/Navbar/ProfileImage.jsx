import { UserCircle } from "lucide-react";
import React from "react";

const ProfileImage = ({ session }) => {
  const imgUrl = session?.user?.user_metadata?.avatar_url;

  return (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
      {imgUrl ? (
        <img
          src={imgUrl}
          alt="user image"
          className="w-full h-full object-cover"
        />
      ) : (
        <UserCircle className="text-green-400 w-8 h-8" />
      )}
    </div>
  );
};

export default ProfileImage;
