import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [dogImage, setDogImage] = useState("");

  function getRandomDogImage() {
    axios
      .get("http://localhost:8001/dog/api/random")
      .then((result) => setDogImage(result.data));
  }

  return (
    <>
      <button onClick={getRandomDogImage}>Get Random Dog Image</button>
      {
        dogImage ? 
        <div className="dogImage">
          <img src={dogImage} alt="Dog Image" />
        </div>
        : ''
      }
    </>
  );
}

export default Home;
