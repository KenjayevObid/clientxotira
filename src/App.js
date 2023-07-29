import React, { useState, useEffect } from "react";
// import{Container, AppBar} from "@mui/material"
import Posts from "./components/Posts";
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts';

import { Container, Header, Title, HeaderImg, Body } from "./style";
import img from "./imges/th.jpg";

export const App = () => {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container>
      <Header>
        <Title>
          <h1>App Component</h1>
          <HeaderImg src={img} alt="img" />
        </Title>
      </Header>
      <Body>
        <Posts setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Body>
    </Container>
  );
};
export default App;
