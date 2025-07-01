import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GoSignOut } from "react-icons/go";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getSessionData, getUserData } from "../utils/userData";
import UserdataCard from "../components/Card/UserdataCard";
import SessiondataCard from "../components/Card/SessiondataCard";

const Dashboard = () => {
  const { session, signOutUser } = userAuth();
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  // shwoing current time
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const date = new Date();
      const timer = date.toLocaleTimeString();
      return setTime(timer);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  // handle user signout
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const result = await signOutUser();
      if (result.success) {
        navigate("/");
        toast.success("logged out successfully");
      }
    } catch (error) {
      console.error("error while signing out:", error);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="w-full bg-gray-900 overflow-hidden">
      {/* navbar */}
      <nav className="bg-gray-800 py-4 border-2 border-gray-700">
        <div className="flex items-center justify-between mx-4 sm:mx-8 md:mx-24">
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 text-lg mr-3 bg-green-400  rounded-full flex items-center justify-center">
              <span>D</span>
            </div>
            <span className="text-2xl hidden sm:block">Dashboard</span>
          </div>
          <div className="flex gap-4 md:gap-6 items-center">
            <p className="text-green-300 text-md">{time}</p>
            <button
              onClick={handleSignOut}
              className="flex items-center bg-red-600 p-2 rounded-md hover:bg-red-700"
            >
              <span className="mr-2">
                <GoSignOut />
              </span>
              Sign Out
            </button>
          </div>
        </div>
      </nav>
      {/* Hero one */}
      <main className="py-6 mx-3 sm:mx-8 md:mx-24">
        <h1 className="text-xl">Welcome back, {}</h1>
        <p className="text-md md:text-lg text-gray-400 mt-1">
          Here's yours accout overview and recent activity
        </p>
        {/* userData Card */}
        <UserdataCard data={getUserData(session)} />
        {/* SessionDataCard */}
        <SessiondataCard data={getSessionData(session)} />
      </main>
    </div>
  );
};

export default Dashboard;
