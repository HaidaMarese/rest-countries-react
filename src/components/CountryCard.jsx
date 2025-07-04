import React from "react";

const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
      <img
        src={flag || "https://via.placeholder.com/256x160?text=No+Flag"}
        alt={name || "No name"}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {name || "N/A"}
        </h2>
        <p className="text-sm text-gray-600">
          <strong>Population:</strong>{" "}
          {typeof population === "number"
            ? population.toLocaleString()
            : "N/A"}
          <br />
          <strong>Region:</strong> {region || "N/A"}
          <br />
          <strong>Capital:</strong> {capital || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;