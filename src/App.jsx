import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import PackageDetailPage from "./components/PackageDetailPage";
import PackageVersionPage from "./components/PackageVersionPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header query={query} setQuery={setQuery} />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<SearchPage query={query} setQuery={setQuery} />}
            />
            <Route path="/:packageName" element={<PackageDetailPage />} />
            <Route
              path="/:packageName/version/:version"
              element={<PackageVersionPage />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
