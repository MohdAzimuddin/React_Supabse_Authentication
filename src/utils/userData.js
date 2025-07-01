import { TfiEmail } from "react-icons/tfi";
import { Calendar, Key, Shield, Timer, User, User2 } from "lucide-react";

//

export const getUserData = (session) => {
  const user = session?.user;
  const identity = session?.user?.identities?.[0];
  return [
    {
      id: 1,
      icon: TfiEmail,
      name: "Email Address",
      data: user?.email,
      desc: "Verified",
    },
    {
      id: 2,
      icon: User,
      name: "User ID",
      data: user?.id,
      desc: "Unique identifier",
    },
    {
      id: 3,
      icon: Calendar,
      name: "Member Since",
      data: user?.created_at,
      desc: "Account creation date",
    },
    {
      id: 4,
      icon: Timer,
      name: "Last Sign In",
      data: identity?.last_sign_in_at,
      desc: "",
    },
    {
      id: 5,
      icon: Shield,
      name: "Authentication",
      data: user?.app_metadata.providers?.[1]|| user?.app_metadata.provider,
      desc: "Primary auth provider",
    },
    {
      id: 6,
      icon: User2,
      name: "User role",
      data: user?.role,
      desc: "According to Authentication",
    },
  ];
};

//
export const getSessionData = (session) => {
  return {
    icon: Key,
    name: "Session Information",
    rows: [
      { desc: "Session Token", data: session?.access_token },
      {
        desc: "Token Expires",
        data: session?.expires_at,
      },
    ],
  };
};
