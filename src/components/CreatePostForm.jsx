import Comment from "./Comment";
import { useState } from "react";
import Post from "./Post";

export default function CreatePostForm(props) {
    const [postName, setPostName] = useState()

  function createPost(){
    console.log('asd');
    <Post/>
  }
  return (
    <>
    <form onSubmit={createPost()} action="">
        <p>Post name</p>
        <input/>
        <p>Post Comment</p>
        <input/>
        <input type="submit" value="Submit" />
    </form>

    </>
  );
}