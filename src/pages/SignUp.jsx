import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState();
  const [error, setError] = useState("");
    const [visibility,setVisibility]=useState(false)

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

const handleVisibility=()=>{
  setVisibility(!visibility)
}

  return (
    <div className="max-w-sm sm:max-w-md min-h-96 m-auto mt-24 md:max-w-lg shadow-md shadow-green-200 hover:shadow-green-400 p-6">
      <form onSubmit={handleSignUp}>
        <div className="mx-1">
        <h3 className="text-md">Sign up now!</h3>
        <p className="text-md mt-2">
          Already have an Account? <span className="mx-2 text-indigo-400 active:text-indigo-100" ><Link to="/signin">Signin!</Link> </span>
        </p>
        </div>

        <div className="flex flex-col gap-6 pt-4 relative">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
  className="text-zinc-800 p-2 rounded-md text-lg font-bold"
          />
          <input
            type={visibility?"text":"password"}
            onChange={(e) => setPassword(e.target.value)}
  className="text-zinc-800 p-2 rounded-md text-lg"/>
          <button onClick={handleVisibility} className="absolute top-24 right-3 text-black font-bold">
               {visibility?<Eye/>:<EyeOff/>}  
          </button>
          <button type="submit" disabled={load} className="p-2 mt-6 bg-green-400 font-bold text-xl rounded-md hover:bg-green-300">Sign Up</button>
        </div>
         {/* {error&&<p>Something went wrong!{error}<p/>} */}
      </form>
    </div>
  );
};

export default SignUp;
