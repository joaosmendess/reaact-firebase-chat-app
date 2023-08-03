import { useState, useRef  } from "react";

import GlobalStyles from "./style/GlobalStyle";
import Auth from "./components/Auth";
import Chat from "./components/Chat";

import {Container, Button,  Input, Label, FormWrapper,IconDiv} from "./appStyle"

import { PiChatsCircleDuotone} from "react-icons/pi"

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(!!cookies.get("auth-token"));
  const [room, setRoom] = useState<null | string>(null);

  const roomInputRef = useRef<HTMLInputElement>(null);

  if (!isAuth) {
    return (
      <>
        <GlobalStyles />
        <Auth setIsAuth ={setIsAuth} />
      </>
    );
  }
  return (
    <Container>
      {room  ?(
       <Chat room = {room} />
      ) : (
        <FormWrapper>
          <h2>Chat online</h2>
        <IconDiv>
          <PiChatsCircleDuotone size="100" color ="blue"  />
        </IconDiv>

          <Label>Enter Room Name:</Label>
          <Input ref= {roomInputRef} />
          <Button
            onClick={() =>
              roomInputRef.current?.value && setRoom(roomInputRef.current.value)
            }
          >
            Enter Chat
          </Button>

        </FormWrapper>
      )}
    </Container>
  );
}

export default App;
