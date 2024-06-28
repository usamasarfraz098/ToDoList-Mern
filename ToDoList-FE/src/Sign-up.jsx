import React from "react";

const Signup = ({ setLogin }) => {
  return (
    <>
      <div className="container bg-green-300 w-screen h-screen flex justify-center items-center">
        <div className="login-container h-5/6 bg-gray-400 w-1/3 rounded-md px-2">
          <div className="heading text-green-700 w-full h-1/4 flex justify-center items-center text-2xl font-semibold">
            <p className="border-b-2 border-green-600">Sign Up</p>
          </div>
          <div className="input-fields mt-3 outline-none flex flex-col pb-2">
            <input
              className="my-2 p-2 rounded"
              type="text"
              name="text"
              id=""
              placeholder="UserName"
            />
            <input
              className="my-2 p-2 rounded"
              type="email"
              name="text"
              id="text"
              placeholder="Email"
            />
            <input
              className="my-2 p-2 rounded"
              type="password"
              placeholder="Password"
            />
            <input
              className="my-2 p-2 rounded"
              type="password"
              placeholder="Confirm Password"
            />
            <p>
              {"Fon,t have an Account"}{" "}
              <span
                className="hover:underline text-blue-600 cursor-pointer"
                onClick={() => {
                  setLogin(true);
                }}
              >
                {"Signup"}
              </span>
            </p>
            <div className="checkbox flex items-center ">
              <input type="checkbox" name="check" id="" />
              <p>
                I accept the
                <span className="text-green-600">Term of conditions</span> &
                <span className="text-green-600"> Privacy Policys</span>
              </p>
            </div>
          </div>
          <button className=" mb-1 w-full mt-5 outline-none h-2/8 bg-green-500 text-gray-300 py-2 font-semibold ">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
