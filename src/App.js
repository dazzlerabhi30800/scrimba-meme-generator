<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
import PicSum from "./Components/PicSum";
import Connundrum from "./Components/Connundrum";
import Card from "./Components/Card";
import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./Components/Box";
import Joke from "./Components/Jokes";
import jokesData from "./Components/JokesData";
import Form from './Components/Form'

function App() {
=======
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Meme from './Components/Meme'
import PicSum from './Components/PicSum'
import Connundrum from './Components/Connundrum'
import Card from './Components/Card'
import React, {useState} from 'react';
import boxes from './boxes';
import Box from './Components/Box'
import Form from './Components/Form'
function App() {

  const [squares, setSquares] = useState(boxes);

  const styles = {
    backgroundColor: "red",
  }






  const squareElements = squares.map(square => (
    <Box on={square.on} key={square.id} />
  ))

>>>>>>> 67db59a (Added git in windows)
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Meme /> */}
      {/* <PicSum /> */}
      {/* <Connundrum /> */}
      {/* <Card /> */}
      <Form />
    </div>
  );
}
export default App;
