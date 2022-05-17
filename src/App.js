import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
import FetchData from './Components/FetchData'
import WindowTracker from './Components/WindowTracker';



function App() {  

  const [show, setShow] = useState(true);

  function handleClick() {
    setShow(prevShow => !prevShow);
  }
    
  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <FetchData /> */}
      {/* <button onClick={handleClick}>Toggle Window Tracker</button> */}
      {/* {show && <WindowTracker />} */}
    </div>
  ); 
}

export default App;
