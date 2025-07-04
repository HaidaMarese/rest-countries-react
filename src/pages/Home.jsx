import React, { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
        );
        const data = await res.json();
        setCountries(data);
        setFiltered(data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const results = countries.filter((country) => {
      return (
        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
        (region === "" || country.region === region)
      );
    });
    setFiltered(results);
  }, [search, region, countries]);

  return (
    <main className="bg-gray-100 min-h-screen px-6 py-10">
      <SearchFilter search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            flag={country.flags?.png}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
