"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const { data } = await axios.post(
        `${apiUrl}/signup`,
        { name, username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.error) {
        setError(data.error);
      } else {
        router.push("/login");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex justify-center items-center formbg w-full min-h-screen">
      <div className="flex flex-col justify-start items-center container px-5 gap-5 relative z-10">
        <form
          className="flex flex-col justify-start items-start w-full gap-5 max-w-[700px] formm p-7 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl md:text-4xl font-medium text-center w-full">
            Create your account
          </h2>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label className="text-xl" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              autoComplete="name"
              className="w-full px-3 py-2 rounded-md inputt outline-none text-zinc-800"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label className="text-xl" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Your username"
              required
              autoComplete="username"
              className="w-full px-3 py-2 rounded-md inputt outline-none text-zinc-800"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
              autoComplete="email"
              className="w-full px-3 py-2 rounded-md inputt outline-none text-zinc-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label className="text-xl" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              autoComplete="new-password"
              className="w-full px-3 py-2 rounded-md inputt outline-none text-zinc-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-cyan-600 hover:bg-cyan-700 px-7 py-2 rounded-lg text-xl slow"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <p className="flex items-center gap-2">
              Already have an account?
              <Link href="/login" className="underline text-cyan-600">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
