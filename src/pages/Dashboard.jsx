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
    <div>
      <h3>
        Welcome,{session?.user?.email} to Supabase Authentication Dahboard!
      </h3>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
