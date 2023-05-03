import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { logIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  console.log(location);
  // handle login button
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from)
      })
      .catch((error) => {
        setError(error?.message)
      });
  };

  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from)
      })
      .catch((error) => setError(error?.message));
  };
  // handle github sign in
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from)
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col w-96">
        <div className="">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-ghost bg-slate-200 my-2"
              >
                <FaGoogle className="mr-1 text-xl" /> Sign In With Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-ghost bg-slate-200 mt-2 mb-0"
              >
                <FaGithub className="mr-1 text-xl" />
                Sign In With Github
              </button>
            </div>
          </form>
          <p className="text-error text-center">{error}</p>
          <p className="text-center pb-2">
            New to Alchemy?
            <Link className="btn btn-link p-0" to={"/register"}>
              Please Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
