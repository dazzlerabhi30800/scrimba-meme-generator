import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
import FetchData from './Components/FetchData'



function App() {  

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Meme /> */}
      <FetchData />
    </div>
  ); 
}

export default App;
