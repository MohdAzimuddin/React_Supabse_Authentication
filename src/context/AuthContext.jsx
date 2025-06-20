import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./SuperBaseClient";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);



//session store
useEffect(()=>{
supabase.auth.getSession().then(({data:session})=>{
setSession(session)
})

supabase.auth.onAuthStateChange((_event,session)=>{
    setSession(session)
})

},[])



//   signUp

  const signUpNewUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.log("SignUp not successfull", error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (error) {
      console.error("thre is some error in signing up", error);
    }
  };

// signin

  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.log("SignIn not successfull", error);
        return { success: false, error };
      }
      return { success: true, data };
    } catch (error) {
      console.error("thre is some error in signing user", error);
    }
  };


// signOut

const signOutUser=async()=>{
    try{
        const {error}=await supabase.auth.signOut();

        if(error){
        console.log("Signout not successfull", error);
        return {success:false,error}
        }
        return {success:true}
    }catch(error){
        console.error("error during signout",error)

    }

    
}


  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signInUser, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const userAuth=()=>{
    return useContext(AuthContext);
}
