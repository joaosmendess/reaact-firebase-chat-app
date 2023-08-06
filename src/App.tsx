import { useState, useRef  } from "react";

import GlobalStyles from "./style/GlobalStyle";
import Auth from "./components/Auth";
import Chat from "./components/Chat";
import Button from "./components/Button";



import {Container,Input, FormWrapper,IconDiv,ChatHeader,IContainer,BContainer,SignOutButton } from "./appStyle"

import { AiFillWechat} from "react-icons/ai"

import { signOut } from "firebase/auth";
import { auth } from "./services/firebaseConfig";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(!!cookies.get("auth-token"));
  const [room, setRoom] = useState<null | string>(null);

  const roomInputRef = useRef<HTMLInputElement>(null);
  
  const SignUserOut = async () => {
await signOut(auth)
cookies.remove("auth-token")
setIsAuth(false)
setRoom(null)
  }

  if (!isAuth) {
    return (
      <>
        <Auth setIsAuth ={setIsAuth} />
      </>
    );
  }
  return (
    <>
    <Container>
      
      <GlobalStyles />
     
      {room  ?(
       <Chat room = {room} />
      ) : (
        <FormWrapper>
          <ChatHeader>
          <h2>Chat online</h2>

          </ChatHeader>
        <IconDiv>
          <AiFillWechat size="150" />
        </IconDiv>

          <IContainer>
            
        
          <Input ref= {roomInputRef} placeholder="Enter Room Name" />
          </IContainer>
           <BContainer>
          <Button
            onClick={() =>
              roomInputRef.current?.value && setRoom(roomInputRef.current.value)
            }
          >
            Enter Chat
          </Button>
          </BContainer>

          
          

        </FormWrapper>
      )}
    </Container>
    <div>
      <SignOutButton  onClick={SignUserOut} >Sign Out</SignOutButton>
    </div>
    </>
  );
}

export default App;
