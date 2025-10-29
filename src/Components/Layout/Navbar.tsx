import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  // Simulate login state (replace with real auth later)
  const isLoggedIn = false;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left: Logo + Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a>Home</a></li>
            <li><a>Products</a></li>
            {isLoggedIn ? (
              <li><a>Logout</a></li>
            ) : (
              <li><a>Login</a></li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">ShopMart</a>
      </div>

      {/* Center: Links (lg+) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Product</NavLink>
        </ul>
      </div>

      {/* Right: Login/Logout + Cart + Avatar */}
      <div className="navbar-end gap-2">

        {/* Conditional Login/Logout Button (desktop only) */}
        {isLoggedIn ? (
          <NavLink to="/logout" className="btn btn-ghost hidden lg:flex">Logout</NavLink>
        ) : (
          <NavLink to="/login" className="btn btn-ghost hidden lg:flex">Login</NavLink>
        )}

        <NavLink to="/carts" tabIndex={0}  className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </NavLink>



        {/* User Avatar (only if logged in) */}
        {isLoggedIn && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >

              <li><a>Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;