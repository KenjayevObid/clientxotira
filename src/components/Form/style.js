import { styled } from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid gold;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const TextInput = styled.input`
  outline: none;
  border: none;
  height: 30px;
  border: 1px solid black;
  margin: 10px 0;
  padding: 2px 5px;
`;
export const Button = styled.button`
border-radius: 3px;
outline: none;
border: none;
height: 35px;
background: ${(color) => ( color ? "blue" : "red")};
margin: 10px 0;
padding: 5px;
font-size: 15px;
cursor: pointer;
`;
export const Title = styled.h3`
color: darkgreen;
`;
