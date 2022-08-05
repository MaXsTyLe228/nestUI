import React from 'react';

interface IPostItemProps {
  image: string,
  title: string,
  category: string,
  date: string,
  short_description: string,
  likes: number,
}

const Index = (props: IPostItemProps) => {
  const { image, title, category, date, short_description, likes} = props
  
  return (
    <div className="flex m-2">
      <img src={image} className="max-h-48"/>
      <div className="flex flex-col">
        <p>{title}</p>
        <p>description: {short_description}</p>
        <p>{category}</p>
        <p>likes: {likes}</p>
        <p>{new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Index;