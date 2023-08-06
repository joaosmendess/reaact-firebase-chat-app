import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 530px;

  border-radius: 8px;
  background-color: #f6f6f6;
  color: #333;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 0px;
  height: 80vh;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px; 
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family:Roboto , sans-serif;
  display: flex;
 justify-content: center;
 align-items: center;

 
  
`;

export const Input = styled.input`
   padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f6f6f6;
  margin-bottom: 10px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #7f8c8d;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ae8;
  }
`;

export const IconDiv = styled.div`
  display: flex;

  justify-content: center;
  margin: 65px;


  > svg {
    color: #4285f4;
  }
`;

export const ChatHeader = styled.div`
  display: block;
  
    width: 530px;
    height: 75px;
  background-color:  #4285f4; // cor de fundo alterada
  color: #ffffff;

  > h2 {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }
`;

export const IContainer = styled.div`
  display: flex;

  justify-content: center;
`;

export const BContainer = styled.div`
  display: flex;

  justify-content: center;
  margin: 45px;

`;
