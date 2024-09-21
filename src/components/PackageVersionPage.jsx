import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const PackageVersionPage = () => {
  const { packageName, version } = useParams();
  const [versionData, setVersionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVersionDetails = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://registry.npmjs.org/${packageName}/${version}`
        );
        if (!response.ok) throw new Error("Version not found");
        const data = await response.json();
        setVersionData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVersionDetails();
  }, [packageName, version]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        {versionData.name} - {versionData.version}
      </h1>
      <p className="mb-4">{versionData.description}</p>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Dependencies</h2>
        <ul className="list-disc pl-5">
          {versionData.dependencies ? (
            Object.entries(versionData.dependencies).map(([dep, ver]) => (
              <li key={dep}>
                {dep}: {ver}
              </li>
            ))
          ) : (
            <p>No dependencies listed.</p>
          )}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Dev Dependencies</h2>
        <ul className="list-disc pl-5">
          {versionData.devDependencies ? (
            Object.entries(versionData.devDependencies).map(([dep, ver]) => (
              <li key={dep}>
                {dep}: {ver}
              </li>
            ))
          ) : (
            <p>No dev dependencies listed.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PackageVersionPage;
