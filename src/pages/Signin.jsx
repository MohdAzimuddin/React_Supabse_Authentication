import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import EmailInput from "../components/common/EmailInput";
import PasswordInput from "../components/common/PasswordInput";
import { validateEmail, validatePassword } from "../utils/validators";
import toast from "react-hot-toast";
import SignInwithProviderbutton from "../components/button/SignInwithProviderbutton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Signin = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signInUser, signInWithProvider, session } = userAuth();

  // handling session

  if (session) {
    return <Navigate to="/dashboard" replace />;
  }

  // handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) return;

    setLoading(true);
    try {
      const result = await signInUser(email, password);
      if (result.success) {
        toast.success("Signed-in successfully!");
        setTimeout(() => {
          toast.success(`welcome! ${session?.user?.name||email} `);
        }, 2500);
      } else {
        toast.error("Sign-in failed,Invalid credential!");
      }
    } catch (err) {
      console.error("Unexpected error", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // handle Auth with provider
  const handleOAuthSignIn = async (provider) => {
    setLoading(true);
    try {
      const result = await signInWithProvider(provider);
      if (!result.success) {
        toast.error(`${provider} sign-in failed`);
      }
    } catch (err) {
      console.error("Unexpected error", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="max-w-sm sm:max-w-md min-h-96 m-auto mt-16 md:max-w-lg shadow-md shadow-green-200 hover:shadow-green-400 p-6">
        <form onSubmit={handleSubmit}>
          <div className="mx-1">
            <h3 className="text-md">Sign in now!</h3>
            <p className="text-md mt-2">
              Don't have an Account?
              <span className="mx-2 text-indigo-400 active:text-indigo-100">
                <Link to="/signup">Signup!</Link>
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-6">
            {/* import email field */}
            <EmailInput
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
            {/* import password filed */}
            <PasswordInput
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
            />
          </div>
          <div className="flex flex-col mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full text-md md:text-xl bg-green-400 p-2 font-bold rounded hover:bg-green-600"
            >
              Sign In
            </button>
            <SignInwithProviderbutton
              icon={<FcGoogle className="w-6 h-6" />}
              name="Sign in with Google"
              handleOAuthSignIn={() => handleOAuthSignIn("google")}
              customstyle={"bg-zinc-800"}
            />
            <SignInwithProviderbutton
              icon={<FaGithub className="text-white w-6 h-6" />}
              name="Sign in with Github"
              handleOAuthSignIn={() => handleOAuthSignIn("github")}
              customstyle={"bg-zinc-500"}
            />
          </div>
        </form>
      </div>
  );
};

export default Signin;
