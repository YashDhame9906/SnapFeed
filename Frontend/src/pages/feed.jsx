import React, { useState, useEffect } from 'react'
import axios from 'axios'

const feed = () => {

    const [posts, setPosts] = useState([{
            _id: "1",
            image: "https://ik.imagekit.io/oxkt9tddu/image_JxSfBFSgW.jpg",
            caption: "City_gate"
        }])


  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then((res) => {
      
      setPosts(res.data.posts)
    })
  
  },[])
  return (
    <section className="feed">  
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post">      
            <img src={post.image} alt={post.caption} />
            <h3>{post.caption}</h3>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </section>  
  )
}

export default feed