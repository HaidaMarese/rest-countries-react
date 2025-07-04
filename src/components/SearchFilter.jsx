import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({ search, setSearch, region, setRegion }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
        
      {/* Search Input */}
      <div className="relative w-full md:w-1/3">
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <input
          id="country-search"
          name="country"
          type="text"
          placeholder="Search for a country..."
          className="w-full p-3 pl-10 shadow rounded-md bg-white text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Region Filter */}
      <select
        id="region-filter"
        name="region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="w-full md:w-1/5 p-3 shadow rounded-md bg-white text-black"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchFilter;
