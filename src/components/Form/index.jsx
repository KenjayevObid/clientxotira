import React, { useState, useEffect } from "react";
import { Container, TextInput, Button, Title } from "./style";
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';

export const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }  
  }
  
  const clear = () => {
    // setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };
  return (
    <Container>      
      <form className="form" onSubmit={handleSubmit}>
        <Title> {currentId ? 'Editing ' : 'Creating '} a Memory</Title>
        <TextInput placeholder="Creator..." name="creator" type="text"  value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextInput placeholder="Title..." name="title" type="text"   value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextInput placeholder="Message..." name="message" type="text"   value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextInput placeholder="Tags..." name="tags" type="text"    value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button type="submit">Submit</Button>
        <Button color="blue" onClick={clear} >Clear</Button>
      </form>
    </Container>
  );
};
export default Form;
