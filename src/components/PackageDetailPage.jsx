import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const PackageDetailPage = () => {
  const { packageName } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPackageDetails = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://registry.npmjs.org/${packageName}`
        );
        if (!response.ok) throw new Error("Package not found");
        const data = await response.json();
        setPackageData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPackageDetails();
  }, [packageName]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{packageData.name}</h1>
      <p className="mb-6">{packageData.description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Maintainers</h2>
        <ul className="list-disc pl-5 space-y-2">
          {packageData.maintainers?.map((maintainer) => (
            <li key={maintainer.name}>
              {maintainer.name} - {maintainer.email}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Versions</h2>
        <ul className="list-disc pl-5 space-y-2">
          {Object.keys(packageData.versions)?.map((version) => (
            <li key={version}>
              <Link
                to={`/${packageName}/version/${version}`}
                className="text-blue-600 hover:underline"
              >
                {version}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageDetailPage;
