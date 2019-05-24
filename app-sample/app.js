import express from "express";
import { log, setLog } from "@faable/flogg";

setLog("app-sample");

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => log(`🔥Ready on port ${port}`));
