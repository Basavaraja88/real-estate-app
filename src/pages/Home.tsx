import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome to Real Estate App</h1>
      <div className="mt-4">
        <Link to="/login" className="text-blue-500 underline">
          Login
        </Link>
        <Link to="/register" className="ml-4 text-blue-500 underline">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
