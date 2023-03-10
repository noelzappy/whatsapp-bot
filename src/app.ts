import express from "express";

import { waAPI } from "./config/whatsapp";

const app = express();

app.get("/", async (req, res) => {
  await waAPI.post("/", {
    messaging_product: "whatsapp",
    to: "233542778775",
    type: "template",
    template: { name: "hello_world", language: { code: "en_US" } },
  });
  res.send("Hello World");
});

export default app;
