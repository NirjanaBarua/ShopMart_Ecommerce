import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h2 className="text-2xl mb-4">Welcome, {user?.name}</h2>
        <p>Email: {user?.email}</p>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="mt-4 px-4 py-2 bg-red-600 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Sign in to your account
      </h2>

      <button
        onClick={() => loginWithRedirect()}
        className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
      >
        Continue to Login
      </button>

      <p className="mt-6 text-gray-400 text-sm">
        Don’t have an account?{" "}
        <NavLink
          to="/signup"
          className="text-indigo-400 hover:text-indigo-300 font-semibold"
        >
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
