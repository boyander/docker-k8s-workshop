import express from "express";
import { log, setLog, err } from "@faable/flogg";
import { sample } from "lodash";
import { config } from "dotenv";
import mongoose from "mongoose";

// Dotenv load
config();
setLog("app-sample");

// Connect to mongodb
const db = process.env.DBURL;
mongoose
  .connect(db)
  .then(() => {
    log(`📡 Connected to DB ${db}`);
  })
  .catch(e => {
    err(`😭 Cannot connect to db ${db}`);
    err(e);
  });

const app = express();

const Cat = mongoose.model("cat", {
  name: { type: String }
});

app.get("/", async (req, res) => {
  res.json({
    cats: (await Cat.find({}, { _id: 0, name: 1 })).map(c => c.name)
  });
});

app.get("/new", async (req, res) => {
  const instanceCat = await Cat.create({
    name: `Garfield ${sample(["A", "B", "C", "D"])}`
  });
  res.json({
    status: "Cat created, OK",
    cat: instanceCat
  });
});

app.get("/error", (req, res) => {
  setInterval(() => {
    throw new Error("ERR");
  }, 1000);
  res.json({
    error: true
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => log(`🔥 Ready on port ${port}`));
