"use client";

import { useMemo, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountrySearch({ countries }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");

  const regions = [
    "All",
    ...new Set(countries.map((country) => country.region).filter(Boolean)),
  ];
  const filteredCountries = countries.filter((country) => {
    const matchesName = country.names.common
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesRegion =
      region === "All" ||
      country.region?.toLowerCase() === region.toLowerCase();

    return matchesName && matchesRegion;
  });
  
  return (
    <>
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-lg border p-3"
        />

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded-lg border p-3"
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-6 text-gray-600">
        {filteredCountries.length} countries found
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.codes.alpha_3} country={country} />
        ))}
      </div>
    </>
  );
}
