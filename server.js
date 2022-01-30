const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Plot = require("./models/plot.model");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//connect to mongodb
const db =
  "mongodb+srv://plotUser:plotUser@cluster0.bharg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

app.get("/", (req, res) => {
  res.send("App is running");
});

app.post("/mongodb", async (req, res) => {
  try {
    const { a, v, t, l, o } = req.body;
    const newPlot = new Plot({
      a,
      v,
      t,
      l,
      o,
    });
    const savePlot = await newPlot.save();
    res.json(savePlot.a);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

let port = process.env.PORT || 8000;

app.listen(port);
