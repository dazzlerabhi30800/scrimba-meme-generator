import React,{useState} from "react";
import "./Meme.css";
import memesData from './MemesData';

// console.log(data.data.memes);

const memes = memesData.data.memes;

function Meme() {

  const [memeImage, setMemeImage] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  let url;
  function handleClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    // setMemeImage(url); 
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" />
        <input type="text" placeholder="Bottom Text" />
        <button onClick={handleClick} className="submit-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme-img" alt="" />
    </main>
  );
}

export default Meme;
