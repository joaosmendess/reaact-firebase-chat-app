/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState}  from 'react';

import {Container,ButtonContainer, } from './style'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


import Button from '../Button';
import Input from '../ChatInput';
import { auth, db } from '../../services/firebaseConfig';


interface ChatProps {
  room: string; // Adicione a propriedade 'room' ao componente ChatProps
}

const Chat: React.FC  <ChatProps> = ({room}) => {

  const [ newMessage, setNewMessage] = useState("")

const messageRef = collection(db, "messages")


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault()
 if(newMessage === "") return; 

 await addDoc(messageRef, {
  text: newMessage,
  createAt: serverTimestamp(), 
  user: auth.currentUser?.displayName,
  room,
 });

 setNewMessage("")

}

  return (
    <Container >
      <form  onSubmit={handleSubmit}>

<Input
 type='text' 
 placeholder='Type your message here...'
 onChange={(e) => setNewMessage(e.target.value)}
 value={newMessage}
 
 />
<ButtonContainer>
<Button type='submit'>Send </Button>

</ButtonContainer>

      </form>
    </Container>
  );
};


export default Chat