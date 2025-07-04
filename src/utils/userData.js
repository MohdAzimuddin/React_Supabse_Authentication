import { TfiEmail } from "react-icons/tfi";
import { Calendar, Key, Shield, Timer, User, User2 } from "lucide-react";
import { formatDate, shortText } from "./format";
import { differenceInMinutes } from "date-fns";

//UserData

export const getUserData = (session) => {
  const user = session?.user;
  // const identity = session?.user?.identities?.[0];


  // minutesAgo 
  const minutesAgo = user?.last_sign_in_at
    ? differenceInMinutes(new Date(),user?.last_sign_in_at)
    : null;

  // console.log("Created At:", formatDate(user?.created_at));
  // console.log("Last Sign In:", formatDate(user?.last_sign_in_at));

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
      data: shortText(user?.id),
      fullData: user?.id,
      desc: "Unique identifier",
    },
    {
      id: 3,
      icon: Calendar,
      name: "Member Since",
      data: formatDate(user?.created_at),
      desc: "Account creation date",
    },
    {
      id: 4,
      icon: Timer,
      name: "Last Sign In",
      data: formatDate(user?.last_sign_in_at),
      desc: minutesAgo!==null?`${minutesAgo} minutes ago`:"unknown",
    },
    {
      id: 5,
      icon: Shield,
      name: "Authentication",
      data: (
        user?.app_metadata.providers?.[1] ||
        user?.app_metadata.provider ||
        ""
      ).toUpperCase(),
      desc: "Primary auth provider",
    },
    {
      id: 6,
      icon: User2,
      name: "User role",
      data: user?.role,
      desc: "Authenticated user role",
    },
  ];
};

//Session Data
export const getSessionData = (session) => {
  return {
    icon: Key,
    name: "Session Information",
    rows: [
      {
        desc: "Session Token",
        data: shortText(session?.access_token),
        fullData: session?.access_token,
      },
      {
        desc: "Token Expires",
        data: formatDate(session?.expires_at),
      },
    ],
  };
};
