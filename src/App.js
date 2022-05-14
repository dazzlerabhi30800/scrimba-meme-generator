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

  
  function toggle(id) { 
    setSquares(prevSquares => {
        return prevSquares.map((square) => {
          return square.id === id ? {...square, on: !square.on} : square
        })
    })
  }



  const squareElements = squares.map(square => (
    <Box on={square.on} id={square.id} key={square.id} toggle={() => toggle(square.id)} />
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


