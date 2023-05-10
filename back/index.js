import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/dog/api/random", (req, res) => {
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((result) => {
      res.status(200).json(result.data.message);
    })
    .catch((err) => console.log("Axios Error: " + err));
});

app.listen(8001, () => console.log("Server started at 8001"));
