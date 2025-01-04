"use client";

import Link from "next/link";

const Login = () => {
  return (
    <form className="w-3/4 mx-auto p-10 bg-white text-black flex flex-col gap-4 rounded-lg shadow-lg shadow-accent">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="rounded-lg outline-none p-2 ring-2 ring-black"
        />
        <p className="hidden text-red-700">error</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="rounded-lg outline-none p-2 ring-2 ring-black"
        />
        <p className="hidden text-red-700">error</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="rounded-lg outline-none p-2 ring-2 ring-black"
        />
        <p className="hidden text-red-700">error</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="rounded-lg outline-none p-2 ring-2 ring-black"
        />
        <p className="hidden text-red-700">error</p>
      </div>
      <div>
        <p>
          Already have account?{" "}
          <Link href="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div className="flex justify-center mt-12">
        <button type="submit" className="w-24 h-12 bg-accent rounded-2xl">
          Register
        </button>
      </div>
    </form>
  );
};

export default Login;
