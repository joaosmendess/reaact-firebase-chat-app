/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

import {
  Container,
  ButtonContainer,
  FormWrapper,
  Room,
  Messages,
} from "./style";

import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import Button from "../Button";
import Input from "../ChatInput";
import { auth, db } from "../../services/firebaseConfig";

interface ChatProps {
  room: string; // Adicione a propriedade 'room' ao componente ChatProps
}

interface Message {
  id: string;
  text: string;
  user: string;
  // Add any other fields that a message should have
}

const Chat: React.FC<ChatProps> = ({ room }) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const messageRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      const messages: Message[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data() as Message; // Convert doc.data() to Message type
        messages.push({
          ...data,
          id: doc.id,
        });
      });

      setMessages(messages);
    });

    return () => unsuscribe();
  }, [room]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messageRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser?.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <Container>
      <Room>
        <h2>Wecolme to {room}</h2>
      </Room>

      <Messages>
        {messages.map((message) => (
          <div key={message.id} >
            <span> {message.user} </span>
            {message.text}
          </div>
        ))}
      </Messages>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Type your message here..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <ButtonContainer>
          <Button type="submit">Send </Button>
        </ButtonContainer>
      </FormWrapper>
    </Container>
  );
};

export default Chat;
