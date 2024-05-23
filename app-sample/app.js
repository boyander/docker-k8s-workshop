const express = require("express");
const { log, setLog } = require("@faable/flogg");
const { sample } = require("lodash");

setLog("app-sample");

const app = express();

let selected = sample(["Lisa", "Bart", "Carapapel", "Dr. Flink"]);
console.log(`Selected name: ${selected}`);

app.get("/", (req, res) => {
  res.json({
    selected,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => log(`🔥Ready on port ${port}`));
