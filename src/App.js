import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Meme from './Components/Meme'
import PicSum from './Components/PicSum'
import Connundrum from './Components/Connundrum'
import Card from './Components/Card'
import React, { useState } from 'react';
import boxes from './boxes';
import Box from './Components/Box'



function App() {

  const [squares, setSquares] = useState(boxes);

  
  function handleClick(id) {
    console.log(id);
  }



  const squareElements = squares.map(square => (
    <Box on={square.on} id={square.id} key={square.id} handleClick={handleClick} />
  ))




  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Meme /> */}
      {/* <PicSum /> */}
      {/* <Connundrum /> */}
      {/* <Card /> */}
      {squareElements}
    </div>
  );
}
export default App;


