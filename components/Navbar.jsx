"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { GrLink } from "react-icons/gr";
import {useAuth} from "@/hooks/useAuth";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = () => {
    setTimeout(() => {
      setNavbar(false);
    }, 500);
  };

  return (
    <header className="w-full sticky top-0 z-20">
      <nav className="absolute flex justify-center items-center w-full">
        <div className="lg:container flex flex-col justify-start items-start w-full bg-slate-100 bg-opacity-20 rounded-xl m-2 px-5 py-3 backdrop-blur-md">
          <div className="flex justify-between items-center w-full">
            <Link
              href="/"
              className="text-3xl font-medium flex gap-2 items-center"
              aria-label="Lynktree Homepage"
            >
              <span className="flex justify-center items-center gap-2 heading">
                <GrLink className="text-cyan-600 text-4xl" /> Lynktree
              </span>
            </Link>

            <div className="hidden lg:flex space-x-5">
              {isAuthenticated ? (
                <Link
                  href={`/dashboard`}
                  className="px-7 py-2 text-lg font-medium rounded-lg bg-cyan-600 hover:bg-cyan-700 slow"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href={`/login`}
                    className="px-7 py-2 text-lg font-medium rounded-lg bg-cyan-600 hover:bg-cyan-700 slow"
                  >
                    Login
                  </Link>
                  <Link
                    href={`/signup`}
                    className="px-7 py-2 text-lg font-medium rounded-lg bg-cyan-600 hover:bg-cyan-700 slow"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center"
              onClick={toggleNavbar}
              aria-label={navbar ? "Close Menu" : "Open Menu"}
            >
              {navbar ? (
                <RiCloseLine className="text-3xl" />
              ) : (
                <RiMenu3Line className="text-3xl" />
              )}
            </button>
          </div>

          <div
            className={`lg:hidden w-full flex flex-col justify-start items-start mt-3 space-y-5 ${
              navbar ? "flex" : "hidden"
            }`}
          >
            {isAuthenticated ? (
              <Link
                href={`/dashboard`}
                className="w-full text-center px-7 py-2 text-lg font-medium rounded-lg bg-cyan-600 hover:bg-cyan-700 slow mt-3"
                onClick={closeNavbar}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={`/login`}
                  className="w-full text-center px-7 py-2 text-lg font-medium rounded-lg bg-cyan-600 hover:bg-cyan-700 slow mt-3"
                  onClick={closeNavbar}
                >
                  Login
                </Link>
                <Link
                  href={`/signup`}
                  className="w-full text-center px-7 py-2 text-lg font-medium rounded-lg bg-cyan-600 hover:bg-cyan-700 slow mt-3"
                  onClick={closeNavbar}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;