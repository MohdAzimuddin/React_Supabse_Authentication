import { Power } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="p-4 w-full flex flex-col items-center justify-center gap-1 text-black">
      <div className="flex items-center gap-2">
      <span className="text-sm text-gray-800">
        <Power />
      </span>
      <span className="text-md md:text-xl font-medium font-bold text-gray-900">
        Powered by supabase
      </span>
      </div>
      {/* <div className="mt-2 text-md md:text-xl font-medium font-bold text-green-100">
        &copy; by Azimuddin 2025
      </div> */}
    </div>
  );
};

export default Footer;
