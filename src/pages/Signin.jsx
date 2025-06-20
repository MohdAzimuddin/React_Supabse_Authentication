import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState();
  const [error, setError] = useState("");

  console.log(`[email:${email},password:${password}]`)

  const { signInUser } = userAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoad(true);

    try {
      const result = await signInUser(email, password);
      if (result.success) {
      navigate("/dashboard");
        alert(email + "successfullly sigined in");
      } else {
        setError(result.error.message);
        console.log(result.error)
      }
    } catch (error) {
      console.log("An unexpected error occurred.", error); // Catch unexpected errors
    } finally {
      setLoad(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <h3>Signin now!</h3>
        <p>
          Don't have an Account?<Link to="/signup">Signup!</Link>
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
          <button type="submit" disabled={load}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
