import express from "express";
import { log, setLog } from "@faable/flogg";
import { sample } from "lodash";

setLog("app-sample");

const app = express();

app.get("/", (req, res) => {
  res.json({
    letter: sample(["Lisa", "Bart", "Carapapel", "Dr. Flink"])
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => log(`🔥Ready on port ${port}`));
