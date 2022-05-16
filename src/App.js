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


console.log("Only for checking")
function App() {

  const [squares, setSquares] = useState(boxes);

  const styles = {
    backgroundColor: "red",
  }

  console.log("I am just writing this to check if my git is working or not!")


  const squareElements = squares.map(square => (
    <Box on={square.on} key={square.id} />
  ))

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
