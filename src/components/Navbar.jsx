import { IconBrandGithub } from "@tabler/icons-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      
      <nav className="w-full h-24 flex items-center justify-end relative z-10 px-4 md:px-40 bg-gradient-to-r from-red-950 to-blue-950 border-b">
        <Link
          href="/"
          className="absolute top-0 left-4 md:left-40 flex flex-col justify-center items-center py-2 md:py-14 px-3 bg-red-950 shadow-xl shadow-black"
        >
         
          <p className="text-4xl text-white brand">Download </p>
        </Link>
        <div className="flex gap-8 uppercase font-semibold">
          <Link
            href="https://github.com/fercal10"
            className="text-white text-xl font-medium transition-all duration-300 ease-in-out"
            target="_blank"
          >
            <IconBrandGithub />
          </Link>
        </div>
      </nav>
    </>
  );
}
