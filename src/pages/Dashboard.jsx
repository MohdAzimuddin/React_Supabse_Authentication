import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GoSignOut } from "react-icons/go";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getSessionData, getUserData } from "../utils/userData";
import UserdataCard from "../components/Card/UserdataCard";
import SessiondataCard from "../components/Card/SessiondataCard";
import ProfileImage from "../components/Navbar/ProfileImage";
import SearchBar from "../components/Navbar/SearchBar";

const Dashboard = () => {
  const { session, signOutUser } = userAuth();
  const [time, setTime] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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

  // filter userData

  const filterUserData = (data, searchTerm) => {
    if (!searchTerm) return data;
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  //filterSession data
  const filterSessionData = (data, searchTerm) => {
    if (!searchTerm) return data;

    const nameMatches = data.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (nameMatches) {
      return data;
    }

    return null;
  };

  // handling SearchInput
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  // handling  ClarSearch
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  //filtered data

  const userData = getUserData(session);
  const sessionData = getSessionData(session);
  const filteredUserData = filterUserData(userData, searchTerm);
  const filteredSessionData = filterSessionData(sessionData, searchTerm);

  return (
    <div className="w-full min-h-screen bg-gray-900 overflow-hidden">
      {/* navbar */}
      <nav className="bg-gray-800 py-4 border-2 border-gray-700">
        <div className="flex items-center justify-between mx-3 md:mx-8 lg:mx-24">
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 text-lg mr-3 bg-green-400  rounded-full flex items-center justify-center">
              <span>D</span>
            </div>
            <span className="text-2xl hidden sm:block">Dashboard</span>
          </div>
          <div className="flex gap-4 md:gap-6 items-center">
            <div className="hidden md:block">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                onClearSearch={handleClearSearch}
              />
            </div>
            {/* <p className="text-green-300 text-md">{time}</p> */}
            <ProfileImage session={session} />
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
        <div className="block md:hidden w-full mt-4 flex justify-center">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onClearSearch={handleClearSearch}
          />
        </div>
      </nav>
      {/* Hero one */}
      <main className="py-6 mx-3 md:mx-8 lg:mx-24">
        <h1 className="text-sm md:text-xl lg:text-2xl font-semibold">
          Welcome,
          <span className="text-green-600 mx-1">
          {session?.user?.user_metadata?.full_name || session?.user?.email}
          </span>
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-gray-400 mt-2">
          Here's yours accout overview and recent activity
        </p>

        {/* searchterm */}
        {searchTerm && (
          <div className="mt-4 mb-2">
            <p className="text-sm text-gray-400">
              Showing results for: "
              <span className="text-green-400">{searchTerm}</span>"
            </p>
          </div>
        )}

        {/* userData Card */}
        {filteredUserData.length > 0 && (
          <UserdataCard data={filteredUserData} />
        )}
        {/* SessionDataCard */}
        {filteredSessionData && <SessiondataCard data={filteredSessionData} />}

        {/* No results message */}
        {searchTerm &&
          filteredUserData.length === 0 &&
          !filteredSessionData && (
            <div className="py-8 text-center">
              <p className="text-gray-400 text-lg">
                No result found for "{searchTerm}"
              </p>
              <button
                onClick={handleClearSearch}
                className="mt-2 text-green-400 hover:text-green-300 underline"
              >
                Clear Search
              </button>
            </div>
          )}
      </main>
    </div>
  );
};

export default Dashboard;
