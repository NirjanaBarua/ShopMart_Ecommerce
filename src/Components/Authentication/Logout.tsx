import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white gap-4">
      <h2 className="text-2xl mb-4">You are logged out</h2>
      <div className="flex gap-4">
        <button
          onClick={() => loginWithRedirect()}
          className="px-6 py-2 bg-indigo-500 rounded-md hover:bg-indigo-400"
        >
          Login
        </button>
        <button
          onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
          className="px-6 py-2 bg-green-500 rounded-md hover:bg-green-400"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Logout;
