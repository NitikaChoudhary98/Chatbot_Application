import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Alert from "./Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [validate, setValidate] = useState(false);

  const user = {
    email: "cnitika123@gmail.com",
    password: "1234",
  };

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please fill all the details");
      setShowMessage(true);
      hideMessage();
    } else if (email !== user.email) {
      setMessage("Email does not exist");
      setShowMessage(true);
      hideMessage();
    } else if (password !== user.password) {
      setMessage("Wrong Password");
      setShowMessage(true);
      hideMessage();
    } else {
      setMessage("Register successful! Redirecting to login...");
      setShowMessage(true);
      hideMessage();
      setValidate(true);
    }
  }

  function hideMessage() {
    setTimeout(() => {
      setShowMessage(false);
    }, 5000); // Hide message after 5 seconds
  }

  if (validate) {
    return <Navigate to="/home" />; // Use Navigate for redirection
  }
  return (
    <>
      <div className="flex justify-between bg-gray-200 relative">
        <div className="w-[50%]">
          <img
            className="w-[70%] m-auto translate-x-2 translate-y-28"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            alt=""
          ></img>
        </div>
        <section className="bg-gray-100 dark:bg-gray-900 w-[50%]">
          <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  LogIn
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-black text-md bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    LogIn
                  </button>
                </form>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Do not have an account?{" "}
                  <Link
                    to="/"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {showMessage && (
        <Alert message={message} setShowMessage={setShowMessage} />
      )}
    </>
  );
};

export default Login;
