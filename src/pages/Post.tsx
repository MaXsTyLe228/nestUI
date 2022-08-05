import React, { useEffect, useState } from 'react';
import axios from "axios";

const Post = () => {
  const [info, setInfo] = useState<any>(null)
  
  useEffect(()=>{
  axios('http://localhost:3000/post', {params: {id: window.location.pathname.substring(1)}})
    .then((data) => setInfo(data.data))
  },[])
  
  return (
    <div>
      {info && <div>
        <img src={info.image} className="max-h-80"/>
        <div className="flex flex-col">
          <p>{info.title}</p>
          <p>{info.full_description}</p>
          <p>{info.category}</p>
          <p>likes: {info.likes}</p>
          <p>{new Date(info.date).toLocaleDateString()}</p>
        </div>
      </div>}
    </div>
  );
};

export default Post;