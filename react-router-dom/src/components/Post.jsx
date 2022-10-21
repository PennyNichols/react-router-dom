import React, { useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';

const Post = () => {

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { 
    console.log(location);
  }, [])

  return (
    <>
      <div>Post Number : { params.postId } , path :  { location.pathname}</div>
      {/* <Link to="/"> Home</Link> */ }
      
      <button onClick={ ()=> navigate('/')}> Home</button>
    </>
  )
}

export default Post