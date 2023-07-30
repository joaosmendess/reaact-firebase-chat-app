import React, {  } from "react";

import { auth, provider } from "../../services/firebaseConfig";
import { signInWithPopup } from "firebase/auth";



import Cookies from "universal-cookie";
const cookies = new Cookies();

import { Container, } from "./style";

import Button from "../Button";

interface AuthProps {
  setIsAuth: (isAuth: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ setIsAuth }) => {


 

  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <p> Sign In With Google To Continue </p>
      <Button onClick={SignInWithGoogle}>Sign In With Google</Button>
     
        
    

    </Container>
  );
};

export default Auth;
