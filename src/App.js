import React from 'react'
import './App.css';
import PostsPage from '../src/Containers/PostsPage/PostsPage'

function App() {
  return (
    <div>
      <div data-test = "component-app" className = "App">
        <div className = "Heading">Imaginary</div>
        <PostsPage/>
      </div>  
    </div>
  );
}

export default App;

