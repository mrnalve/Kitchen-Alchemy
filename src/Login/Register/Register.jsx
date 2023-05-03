import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const {signUp, updateUserProfile} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleRegister = (event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // sign up
        signUp(email, password)
        .then((result)=>{
            const newUser = result.user
            console.log(newUser);
            updateUserProfile(newUser, name, photoURL)
            form.reset()
            navigate('/')
        })
        .catch(error => setError(error?.message))
        // update user profile
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
              />
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
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
              <p className="text-error text-center">{error}</p>
              <label className="label">
                <Link
                  to={"/login"}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
