import React from "react";

const SignInwithProviderbutton = ({ handleOAuthSignIn, icon, name,customstyle}) => {
  return (
    <button
      type="button"
      onClick={handleOAuthSignIn}
      className={`w-full text-md md:text-xl mt-6 p-2 font-bold rounded hover:bg-gray-600 ${customstyle}`}
    >
      <span className="flex gap-3 justify-center items-center">
       {icon} 
        {name}
      </span>
    </button>
  );
};

export default SignInwithProviderbutton;
