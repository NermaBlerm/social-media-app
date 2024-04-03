import React from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';
function App(){ 
  return(
    <div>
      <h1>Fakebook!</h1>
      
        
        <CreatePostForm />
        
        {/* Feed */}
        
        <Post postName="This is a test pasdadsdaost!"/>
        <Post postName="This is a test pasdadsdaost!"/>

    </div>
  )
}
export default App
