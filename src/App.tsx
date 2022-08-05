import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./pages/News";
import Post from "./pages/Post";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News/>}/>
        <Route path="/:post" element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;