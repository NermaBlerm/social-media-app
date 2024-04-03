import Comment from "./Comment";
import { useState } from "react";

export default function Post(props) {
  const [likes,setLikes] = useState(0)
  function handleLike(){
    setLikes(likes+1)
  }
  return (
    <>
      <h3>{props.postName}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments: </p>
      <Comment description="This is a test comment!"/>
      <Comment description="This is another test comment!" />
      <Comment description="This is yet another test comment!" />
    </>
  );
}