// 

import validator from "validator";

export const validateEmail=(email)=>{
  if(!email){
    return "Email is required"
  }if(!validator.isEmail(email)){
    return "Invalid Email Format"
  }
return ""
}

export const validatePassword=(password)=>{
  if(!password){
    return "password is required"
  }
  if(!validator.isLength(password,{min:6})){
    return "Password must be at least 6 characters.";
  }
}