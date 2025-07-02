import { Search, X } from "lucide-react";
import React from "react";

const SearchBar = ({ searchTerm, onSearchChange, onClearSearch }) => {
  return (
    <div className="relative flex itmes-center">
      <div className="relative">
        <Search className="absolute left-2 top-3 text-gray-400 w-4 h-4"/>
        <input
          type="text"
          placeholder="Search user data..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-gray-700 text-white px-10 py-2 rounded-lg border border-gray-600 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-400 w-72 sm:w-96 md:w-64"
        />

        {searchTerm && (
          <button onClick={onClearSearch}
          className="absolute right-2 top-3 text-gray-400 hover:text-white "
          >

            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
