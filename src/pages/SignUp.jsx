import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import EmailInput from "../components/common/EmailInput";
import PasswordInput from "../components/common/PasswordInput";
import { validateEmail, validatePassword } from "../utils/validators";
import toast from "react-hot-toast";

const SignUp = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = userAuth();
  const navigate = useNavigate();

  //handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) return;

    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate("/dashboard");
        toast.success("Signed-up successfully!");
        setTimeout(() => {
          toast.success(`welcome! ${email} `);
        }, 2500);
      } else {
        toast.error("Sign-up failed.");
      }
    } catch (err) {
      console.error("Unexpected error", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-h-screen max-w-sm sm:max-w-md min-h-96 m-auto mt-16 md:max-w-lg shadow-md shadow-green-200 hover:shadow-green-400 p-6">
      <form onSubmit={handleSubmit}>
        <div className="mx-1">
          <h3 className="text-md">Sign up now!</h3>
          <p className="text-md mt-2">
            Already have an Account?
            <span className="mx-2 text-indigo-400 active:text-indigo-100">
              <Link to="/signin">Signin!</Link>
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-6">
          {/* importing Email filed */}
          <EmailInput
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          {/* importing Email filed */}
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full text-md md:text-xl mt-6 bg-green-400 p-2 font-bold rounded hover:bg-green-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
