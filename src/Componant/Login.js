import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidaData } from "../Utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { USER_AVATAR } from "../Utils/Constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMassege, setErrorMassege] = useState(null);
  const dispatch = useDispatch;

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const massege = checkValidaData(
      email.current.value,
      password.current.value
    );
    setErrorMassege(massege);
    if (massege) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "name.current.value",
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMassege(error.massege);
            });
        })
        .catch((error) => {
          const errorCode = error.Code;
          const errorMassege = error.massege;
          setErrorMassege(errorCode + "-" + errorMassege);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMassege = error.massege;
          setErrorMassege(errorCode + "-" + errorMassege);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-11 bg-black my-34  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input   
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-slate-600"
          />
        )}
        <input ref={email} className="p-4 my-2 w-full bg-slate-700" />
        <p className="text-red-600 font-bold p-2">{errorMassege}</p>
        <button
          className="p-4 my-6 bg-red-800 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sing up now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
