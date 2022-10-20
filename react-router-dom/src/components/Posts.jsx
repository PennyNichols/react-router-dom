import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  return (
    <>
      <div>Posts</div>
      <Link to="/posts/1"> Post 1</Link>
      <Link to="/posts/2"> Post 2</Link>
      <Link to="/posts/3"> Post 3</Link>
      <Link to="/posts/4"> Post 4</Link>
    </>
 
  )
}

export default Posts