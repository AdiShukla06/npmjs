import React, { useState, useEffect } from "react";
import { searchPackages } from "../api";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const SearchPage = ({ query, setQuery }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await searchPackages(query, 10, page * 10);
      setPackages(result.objects || []);
    } catch (err) {
      setError("Failed to fetch packages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.length > 2) {
      handleSearch();
    }
  }, [query, page]);

  const handleNextPage = () => setPage(page + 1);
  const handlePreviousPage = () => setPage(page - 1);

  return (
    <div className=" mx-auto">
      {/* Search Results Dropdown */}
      {query.length > 2 && (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {!loading && packages.length === 0 && <p>No results found.</p>}

          <ul className="space-y-2">
            {packages.map((pkg) => (
              <li
                key={pkg.package.name}
                className="border-b border-gray-200 py-2"
              >
                <Link
                  to={`/${pkg.package.name}`}
                  className="text-blue-600 hover:underline"
                >
                  {pkg.package.name}
                </Link>
                <p className="text-gray-600">{pkg.package.description}</p>
              </li>
            ))}
          </ul>

          {/* Pagination Buttons */}
          {packages.length > 0 && (
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousPage}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                disabled={page === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {/* Hero Section */}
      {query.length <= 2 && (
        <div className="hero-section flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-purple-700 to-red-700 text-white p-8 shadow-lg ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold mb-4">
            Build amazing <br /> things
          </h1>
          <p className="text-md sm:text-lg mt-2 text-center">
            The place to discover and share open source packages.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
