import React from "react";
import noimg from "../../../imges/no-image.png";
import {
  Container,
  ImgContainer,
  Button,
  Title,
  ImgFront,
  Tags,
  CreatedAt,
  Creator,
  Message,
  Footer,
  
  TextCon,
  Update,
  Img,
} from "./style";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";

import moment from "moment";

export const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <ImgContainer>
        <Img src={post.selectedFile || noimg} alt="selectedFile" />
      </ImgContainer>
      <ImgFront>
        <div>
          <Creator>{post.creator}</Creator>
          <CreatedAt>{moment(post.createdAt).fromNow()}</CreatedAt>
        </div>
       
          <Update
            onClick={() => setCurrentId(post._id)}
          >
            ...
          </Update>
        
      </ImgFront>
      <TextCon>
        <Tags>{post.tags?.map((tag) => `#${tag} `)}</Tags>
        <Title>{post.title}</Title>
        <Message>{post.message}</Message>

        <Footer>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(likePost(post._id))}
          >
            Like {post.likeCount}{" "}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            Delete
          </Button>
        </Footer>
      </TextCon>
    </Container>
  );
};
export default Post;
