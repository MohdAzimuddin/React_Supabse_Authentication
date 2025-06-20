import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState();
  const [error, setError] = useState("");

  const {signUpNewUser } = userAuth();

  console.log(`[email:${email},password:${password}]`)



  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate("/dashbaord");
        alert(email + "sign up successfuly");
      } else {
        setError(result.error.message);
      }
    } catch (error) {
      setError("An unexpected error occurred.",error); // Catch unexpected errors
    } finally {
      setLoad(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h3>Sign up now!</h3>
        <p>
          Already have an Account?<Link to="/signin">Signin!</Link>
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="text-zinc-800"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="text-zinc-800"
          />
          <button type="submit" disabled={load}>Sign Up</button>
        </div>
         {/* {error&&<p>Something went wrong!{error}<p/>} */}
      </form>
    </div>
  );
};

export default SignUp;
