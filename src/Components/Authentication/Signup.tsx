import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-black shadow-lg rounded-2xl p-8 w-96 text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">Create your account</h2>

        <button
          onClick={() =>
            loginWithRedirect({
              screen_hint: "signup",
            })
          }
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          Continue to Sign Up
        </button>

        <p className="mt-6 text-gray-400 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => loginWithRedirect()}
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
