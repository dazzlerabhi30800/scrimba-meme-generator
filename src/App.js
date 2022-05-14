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
    setSquares(prevSquare => {
      const newSquares = [];
      for(let i = 0; i< prevSquare.length; i++) {
        const currentSquare = prevSquare[i];
        if(currentSquare.id === id) {
          const updateSquare = {
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquares.push(updateSquare)
        }
        else{
          newSquares.push(currentSquare)
        }
      }
      return newSquares;
    })
  }



  const squareElements = squares.map(square => (
    <Box on={square.on} id={square.id} key={square.id} toggle={toggle} />
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


