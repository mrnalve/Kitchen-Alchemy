import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col w-96">
        <div className="">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
              <button className="btn btn-ghost bg-slate-200 my-2"><FaGoogle className='mr-1 text-xl' /> Sign In With Google</button>
              <button className="btn btn-ghost bg-slate-200 my-2"><FaGithub className='mr-1 text-xl' />Sign In With Github</button>
            </div>
          </form>
          <p className='text-center pb-2'>New to Alchemy?<Link className='btn btn-link p-0' to={'/register'}>Please Register</Link></p>
        </div>
      </div>
    </div>
    );
};

export default Login;