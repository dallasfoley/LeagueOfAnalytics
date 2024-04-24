"use client";

import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GoogleIcon from "@mui/icons-material/Google";
import MailIcon from "@mui/icons-material/Mail";
import {
  signUpWithEmailPassword,
  signInWithEmailPassword,
  signInWithGoogle,
} from "@/lib/constants";
import { useState } from "react";

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="w-96 h-3/5 rounded-2xl bg-slate-900 flex flex-col justify-around items-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => setEmailInput(e.target.value)}
          required
          className="h-10 w-56 rounded-xl p-2"
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setPasswordInput(e.target.value)}
          required
          className="h-10 w-56 rounded-xl p-2"
        />
        <Link href="/auth/home">
          <button
            onClick={() => signInWithEmailPassword(emailInput, passwordInput)}
            className="h-16 w-16 bg-slate-500 rounded-2xl hover:bg-slate-200
        transition duration-300 hover:scale-110 hover:text-black"
          >
            <ArrowForwardIcon fontSize="large" />
          </button>
        </Link>
        <h2 className="font-bold text-lg">or</h2>
        <Link href="/auth/home">
          <button
            onClick={signInWithGoogle}
            className="h-16 w-64 bg-slate-500 rounded-2xl hover:bg-slate-200
        transition duration-300 hover:scale-110 hover:text-black text-lg"
          >
            <div className="flex justify-center items-center">
              <h3 className="font-bold mr-2">Sign-In with Google</h3>
              <GoogleIcon className="ml-2" fontSize="large" />
            </div>
          </button>
        </Link>
      </div>
      <h3 className="my-4">{`Don\'t have an account yet?`}</h3>
      <div className="flex items-center">
        <Link href="/auth/home">
          <button
            onClick={() => signUpWithEmailPassword(emailInput, passwordInput)}
            className="h-16 w-64 bg-slate-500 rounded-2xl hover:bg-slate-200
        transition duration-300 hover:scale-110 hover:text-black text-lg"
          >
            <div className="flex justify-center items-center">
              <h3 className="font-bold mr-2">Sign-Up with Email</h3>
              <MailIcon className="ml-2" fontSize="large" />
            </div>
          </button>
        </Link>
        <h2 className="font-bold text-lg mx-4">or</h2>
        <Link href="/auth/home">
          <button
            onClick={signInWithGoogle}
            className="h-16 w-64 bg-slate-500 rounded-2xl hover:bg-slate-200
        transition duration-300 hover:scale-110 hover:text-black text-lg"
          >
            <div className="flex justify-center items-center">
              <h3 className="font-bold mr-2">Sign-Up with Google</h3>
              <GoogleIcon className=" ml-2" fontSize="large" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
