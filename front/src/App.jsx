import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [dogData, setDogData] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:8001/dog/api/random")
      .then((result) => setDogData(JSON.parse(result.data.message)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <img src={dogData} alt="Random Dog Image" />
    </>
  );
}

export default App;
