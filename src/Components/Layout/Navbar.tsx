import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const Navbar = () => {
  const { isAuthenticated, user, loginWithRedirect, logout, isLoading } = useAuth0();
  console.log({ isLoading, isAuthenticated, user });

  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;
  const cartTotal = cart.length;

  return (
    <div className="navbar bg-base-100 shadow-sm">

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
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-600 font-semibold" : ""

            }
          >
            <span className="font-semibold">Home</span></NavLink>
          <NavLink
            to="/product"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-600 font-semibold" : ""

            }
          >
            <span className="font-semibold">Product</span></NavLink>
            {isAuthenticated ? (
              <li>
                <button className='font-semibold'
                  onClick={() => logout({ returnTo: window.location.origin + '/logout' })}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </li>
            )}
          </ul>
        </div>
        <h1 className="text-xl font-bold text-green-700">ShopMart</h1>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-600 font-semibold" : ""

            }
          >
            <span className="font-semibold">Home</span></NavLink>
          <NavLink
            to="/product"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-600 font-semibold" : ""

            }
          >
            <span className="font-semibold">Product</span></NavLink>
        </ul>
      </div>

   
      <div className="navbar-end gap-2">

        {/* User Avatar (only if logged in) */}
        {isAuthenticated && user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={user.picture}
                />
              </div>
            </div>
          </div>
        )}

      
        {isAuthenticated ? (
          
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/logout' } })}
            className="btn btn-ghost hidden lg:flex"
          >
            Logout
          </button>

        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="btn btn-ghost hidden lg:flex"
          >
            Login
          </button>
          
        )}



        <NavLink to="/carts" tabIndex={0} className="btn btn-ghost btn-circle">
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
            <span className="badge badge-sm indicator-item">{cartTotal}</span>
          </div>
        </NavLink>


      </div>
    </div>
  );
};

export default Navbar;