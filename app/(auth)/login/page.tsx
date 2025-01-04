"use client";

import Link from "next/link";
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import Form from "next/form";

const handleLogin = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("http://localhost:8000/api/login", {
      body: JSON.stringify({ email, password }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Error:  ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Form
      className="w-3/4 mx-auto p-10 bg-white flex flex-col gap-4 rounded-lg shadow-lg shadow-accent"
      // action={""}
      action={handleLogin}
      formMethod="POST"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-lg outline-none p-2 ring-2 ring-black"
        />
        <p className="hidden text-red-700">error</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword === false ? "password" : "text"}
          name="password"
          id="password"
          className="rounded-lg outline-none p-2 ring-2 ring-black"
        />
        <p className="hidden text-red-700">error</p>
      </div>
      <div className="flex flex-row-reverse justify-end gap-2">
        <label htmlFor="password">Show</label>
        <input
          type="checkbox"
          className="rounded-lg outline-none p-2 ring-black"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        />
        <p className="hidden text-red-700">error</p>
      </div>
      <div>
        <p>
          Don&apos;t have any account?{" "}
          <Link href="/register" className="text-blue-600">
            Register here
          </Link>
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <LoginButton />
      </div>
    </Form>
  );
};

export default Login;
