import { styled } from "styled-components";



export const Container = styled.div `

display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 530px;
 
  background-color: #fff;
  color: #333;
  margin: auto;
  position: absolute;
  
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px; 
  @media (max-width: 416px) {
  width: 350px;
  height: 80vh;
  }

  @media (max-width: 1200px) {
    width: 550px;
  height: 65vh;
   
  }
`
export const FormWrapper = styled.form`
 display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  width: 80%;
  height: auto;
  
`;

export const ButtonContainer = styled.div `

display: flex;
  justify-content: center;
  margin: 10px;

`



export const Room = styled.div `

 display: block;
  margin: 15px;
  width: 500px;
  height: 75px;
background-color:  #4285f4; // cor de fundo alterada
color: #ffffff;

> h2 {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  font-weight: bold;
}
@media (max-width: 416px) {
  width: 320px;
  height: 75px;
  }
  

`


export const Messages = styled.div `

margin: 20px;
  overflow-y: auto;
  height: 300px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  background-color: #f3f3f3;
  color: #333;

  > div {
    margin: 10px 0;

    > span {
      font-weight: bold;
      color: #4285f4;
      margin-right: 10px;
    }
  }

`

