import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const docRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with google </button>
    </div>
  );
};

export default SignIn;
