import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../SupaBaseClient";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Session management
  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
      }
      setSession(session);
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session);
      setSession(session);
      setLoading(false);

      // Handle sign out event specifically
      if (event === "SIGNED_OUT") {
        setSession(null);
      }
    });

    // Cleanup subscription
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

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

  const signOutUser = async () => {
    try {
      setLoading(true);
      setSession(null);
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.log("Signout not successfull", error);
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);
        setLoading(false);
        return { success: false, error };
      }
      setLoading(false);
      return { success: true };
    } catch (error) {
      console.error("error during signout", error);
    }
  };

  // SignWithProvider (for Authentication with Google or other Provider value)

  const signInWithProvider = async (provider) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: "http://localhost:5173/dashboard",
        },
      });

      console.log("OAuth redirect response:", data, error);

      if (error) {
        console.error("OAuth sign-in-error:", error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (err) {
      console.error("Unexpected OAuth error", err);
      return { success: false, error: err };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        signUpNewUser,
        signInUser,
        signOutUser,
        signInWithProvider,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
