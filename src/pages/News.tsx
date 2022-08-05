import React, { useEffect, useState } from 'react';
import axios from "axios";
import PostItem from "../components/PostItem";

const News = () => {
  const [category, setCategory] = useState<string>('')
  const [categories, setCategories] = useState<string[]>([])
  const [posts, setPosts] = useState<any[]>([])
  
  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => setCategory(event.target.value)
  
  useEffect(() => {
    axios('http://localhost:3000/categories')
      .then((data) => setCategories(data.data))
  }, [])
  
  useEffect(() => {
    axios('http://localhost:3000/posts', { params: { category: category } })
      .then((data) => setPosts(data.data))
  }, [category])
  
  return (
    <div>
      <input
        id='radioall'
        type="radio"
        name="categories"
        value={''}
        onChange={handleRadio}/>
      <label htmlFor={'radioall'}>all</label>
      {categories.length > 0 && categories.map((item, key) =>
        <div key={key}>
          <input
            id={'radio' + item}
            type="radio"
            name="categories"
            value={item}
            onChange={handleRadio}
          />
          <label htmlFor={'radio' + item}>{item}</label>
        </div>
      )}
      {posts && posts.map(post =>
        <a key={post._id} href={post._id}>
          <PostItem
            image={post.image}
            category={post.category}
            date={post.date}
            likes={post.likes}
            short_description={post.short_description}
            title={post.title}
          />
        </a>)}
    </div>
  );
};

export default News;