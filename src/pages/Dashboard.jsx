import React from "react";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { session, signOutUser } = userAuth();
  const navigate=useNavigate()

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const response = await signOutUser();
      if (response.success) {
        navigate("/");
        alert("user loged out successfullly")
      }
    } catch (error) {
      console.error("error while signing out", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h3 className="mt-16 text-lg text-center">
      <span className="block">Welcome,<span className="font-bold mx-1">{session?.user?.email}</span>  </span>  <span className="text-green-300">
       Supabase</span> Authentication Dahboard!
      </h3>
      <button onClick={handleSignOut} className="flex items-center p-2 bg-red-500 rounded-md">Sign Out</button>
        
    </div>
  );
};

export default Dashboard;
