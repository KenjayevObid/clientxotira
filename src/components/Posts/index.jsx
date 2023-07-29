import React from 'react'
import Post from './Post';
import { useSelector } from 'react-redux';
import { Container } from './style';

export const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  return (
    <Container>
         {posts.map((post) => (
            <Post key={post._id} post={post} setCurrentId={setCurrentId} />          
        ))}
    </Container>
  )
}
export default Posts;