import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {
  const { loginProvider, signIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setError(false);

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => setError(true));

    form.reset();
  };

  const handleGoogleLogin = () => {
    setError(false);
    loginProvider(googleProvider)
      .then(() => {})
      .catch((err) => setError(true));
  };

  const handleGithubLogin = () => {
    setError(false);

    loginProvider(githubProvider)
      .then(() => {})
      .catch((err) => setError(true));
  };
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="flex justify-center items-center lg:min-h-screen  lg:grid-cols-12">
        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-10 lg:px-10 xl:col-span-6 bg-gray-200 dark:bg-gray-700 rounded-md">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-4xl mb-6 font-semibold text-center dark:text-white text-blue-700">
              Login
            </h1>
            <form
              onSubmit={submitHandler}
              className="mt-4 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6">
                <label
                  for="Email"
                  class="block text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  onFocus={() => setError(false)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-lg text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 ">
                <label
                  for="Password"
                  className="block text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  required
                  onFocus={() => setError(false)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-lg text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-600 dark:text-gray-200"
                />
              </div>
              <div className="col-span-6 ">
                {error && (
                  <p className="text-xl text-red-500">Invalid Credential</p>
                )}
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-md font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                >
                  Log In
                </button>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  Don't have an account?
                  <Link
                    to={"/register"}
                    className=" text-gray-100 font-semibold bg-blue-600 py-1 px-1 rounded "
                  >
                    <span className="ml-1 text-md">Register</span>
                  </Link>
                </p>
              </div>
            </form>
            <hr className="my-6 border-gray-500 border" />
            <div className="flex justify-between ">
              <button
                onClick={handleGoogleLogin}
                className="py-3 px-6 bg-green-600 rounded  mr-4 text-white"
              >
                Google Login
              </button>
              <button
                onClick={handleGithubLogin}
                className="py-3 px-6 bg-gray-800 rounded  text-white"
              >
                Github Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
