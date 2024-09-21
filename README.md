# NPMjs Clone

This project is a frontend clone of the [NPMjs website](https://www.npmjs.com/), built using React (with Vite) and Tailwind CSS. The app allows users to search for NPM packages, view package details, and explore version-specific information.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Setup Instructions](#setup-instructions)
5. [API Usage](#api-usage)
6. [Code Documentation](#code-documentation)
7. [Error Handling](#error-handling)
8. [Responsive Design](#responsive-design)

## Project Overview

The goal of this project was to create a clone of the NPMjs website, focusing on the following pages:

1. **Search NPM Packages**: A page where users can search for packages using an API call to the NPM registry.
2. **NPM Package Detail Page**: Displays detailed information about a specific package.
3. **Version-Specific Package Page**: Shows details of a particular version of the package.

The project was developed using React with Vite as the bundler and Tailwind CSS for styling.

## Features

- **Search Functionality**: Users can search for NPM packages by typing in the search bar.
- **Pagination**: Navigate between search results using next and previous buttons.
- **Package Details**: View details of a specific package by clicking on the package name in the search results.
- **Version Details**: Explore version-specific information of packages.
- **Responsive Design**: Fully responsive across devices, including mobile and desktop.
- **Error Handling**: Proper error messages are displayed when API requests fail.

## Technology Stack

- **Frontend Framework**: React (with Vite)
- **Styling**: Tailwind CSS
- **Third-Party Libraries**:
  - `react-router-dom`: For routing between pages.
  - `react-icons`: For adding icons to the UI.
  
## Setup Instructions

### Prerequisites

Make sure you have Node.js (>= 14.x) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/npmjs-clone.git

2. Navigate to the project directory:
   ```bash
   cd npmjs-clone

3. Install the dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

## API Usage

The project uses the NPM Registry API for fetching package data. The following endpoints are utilized:

- Search API: To search for packages based on a query.
  - GET https://registry.npmjs.org/-/v1/search?text={query}&size={size}&from={from}
- Package Details API: To get details about a specific package.
  - GET https://registry.npmjs.org/{package_name}
- Version Details API: To get details about a specific version of a package.
  - GET https://registry.npmjs.org/{package_name}/{version}

These endpoints allow fetching data such as package name, description, version, author, and other metadata.

## Code Documentation

The code follows clean and modular principles. Each component is well-documented using comments to explain the logic. Here are a few notable sections:

- Reusable Components: Components like LoadingSpinner and ErrorMessage are reusable across the app.
- API Calls: All API calls are handled in a separate api/index.js file to keep the logic separate from UI components.
- Routing: The app uses react-router-dom for routing between pages, with dynamic paths for package details and version-specific details.

## Error Handling

- The application handles errors using the ErrorMessage component, which displays a friendly message if an API request fails.
- Loading states are managed using the LoadingSpinner component while data is being fetched.
- If no search results are found, a "No results found" message is displayed to the user.

## Responsive Design

- Tailwind CSS is used for building a fully responsive layout. The app adapts to different screen sizes, providing a great user experience on both desktop and mobile devices.
- The header navigation hides certain elements (like the login/signup links) on mobile screens for a cleaner UI.
Future Improvements
- Caching: Implement caching for frequently searched packages to reduce API calls.
  
## Acknowledgements

- NPM Registry API: For providing the open API to fetch package data.
- React and Tailwind CSS: For providing an easy and efficient way to build modern web applications.
