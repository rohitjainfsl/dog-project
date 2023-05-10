import React, { useEffect, useState } from "react";
import axios from "axios";

function Breed() {
  const [breedList, setBreedList] = useState('');
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((result) => {
      let data = result.data.message;
      console.log(data)
      for (let x in data) {
        if (data[x].length === 0) {console.log(x); setBreedList([...breedList, x])}
      }
    });
  }, []);

  console.log(breedList)

  return <div>Breed</div>;
}

export default Breed;
