import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'


const Post = () => {
  const params =useParams()
  const navigate = useNavigate()
  const location = useLocation()
    return (
        <>
            <div>Post Number : {params.postId} </div>
            <button onClick={()=> navigate('/')}>Home</button>
        </>
    )
}

export default Post