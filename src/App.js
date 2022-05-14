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
import Joke from './Components/Jokes';
import jokesData from './Components/JokesData';



function App() {

  const [isShown, setIsShown] =  useState(false);

  function toggleShown(){
    setIsShown(prevShown => !prevShown);
  }

 const jokeElements = jokesData.map(joke => {
   return(
     <Joke 
        key={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
     />
   )
 })

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Meme /> */}
      {/* <PicSum /> */}
      {/* <Connundrum /> */}
      {/* <Card /> */}
      {jokeElements}
    </div>
  );
}
export default App;


