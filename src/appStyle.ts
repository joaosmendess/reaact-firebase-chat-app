import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 450px;
  margin-top: 130px;
  justify-content: center;
height: 65vh;
border: 1px ;
width: 400px;
border-radius: 8px;

  background-color: #f0f0f0;
`;



export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  >h2 {
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;


  }
 
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: sans-serif;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
width: 250px;
  &:hover {
    background-color: #357ae8;
  }
`;


export const IconDiv = styled.div `
display: flex;
margin-bottom: 70px;




`