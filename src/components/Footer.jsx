import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-8">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {/* Column 1 - Products */}
        <div>
          <h3 className="font-bold text-lg mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-gray-400">
                NPM
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                GitHub
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                CLI
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Docs
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 - Company */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-gray-400">
                Help
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Status
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Community
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Security
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Support */}
        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <a
            href="https://twitter.com/npmjs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com/npm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/npm-inc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright and Legal Links */}
        <div className="text-center sm:text-right">
          <p>
            &copy; {new Date().getFullYear()} npm, Inc. All rights reserved.
          </p>
          <div className="space-x-4">
            <Link to="#" className="hover:text-gray-400">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-gray-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
