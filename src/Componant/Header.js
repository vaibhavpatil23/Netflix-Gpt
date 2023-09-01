import React from "react";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


const Header = () => {
  const Navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{

    Navigate("/")
    })
    .catch((error)=>{
      Navigate("/error")
    
    })
    }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />

    <div className="flex p-2">
      <img className="w-12 h-12" src="https://avatars.githubusercontent.com/u/6759280?v=4" alt="" />
      <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
    </div>
    </div>
  );
};

export default Header;
