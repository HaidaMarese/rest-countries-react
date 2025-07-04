import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const CountryDetails = () => {
  const { name } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => res.json())
      .then(data => setCountry(data[0]))
  }, [name])

  if (!country) return <p className="p-6">Loading...</p>

  return (
    <div className="p-6">
      <Link to="/" className="px-4 py-2 bg-gray-700 text-white rounded">← Back</Link>
      <div className="mt-6">
        <img src={country.flags.svg} className="w-80 mb-6" />
        <h2 className="text-3xl font-bold">{country.name.common}</h2>
        <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Sub Region:</strong> {country.subregion}</p>
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <div className="mt-4">
          <strong>Border Countries:</strong>{" "}
          {country.borders?.map(code => (
            <span key={code} className="inline-block bg-gray-300 rounded px-2 py-1 m-1">{code}</span>
          )) || "None"}
        </div>
      </div>
    </div>
  )
}

export default CountryDetails